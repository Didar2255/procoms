import { CircularProgress, Container } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createPaymentIntent,
  setError,
  setIsProcessing,
  setSuccess,
} from '../../../../redux/slices/payment/paymentSlice';

const CheckOutFrom = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const clientSecret = useSelector((state) => state.payment.clientSecret);
  const error = useSelector((state) => state.payment.error);
  const success = useSelector((state) => state.payment.success);
  const isProcessing = useSelector((state) => state.payment.isProcessing);

  useEffect(() => {
    dispatch(createPaymentIntent(price));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    dispatch(setIsProcessing(true));

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      dispatch(setError(error.message));
      dispatch(setSuccess(''));
      dispatch(setIsProcessing(false));
    } else {
      dispatch(setError(''));
      dispatch(setIsProcessing(false));
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });

    if (intentError) {
      dispatch(setError(intentError.message));
      dispatch(setSuccess(''));
    } else {
      dispatch(setSuccess('Your payment processed successfully'));
      dispatch(setError(''));
    }
  };

  return (
    <Container className="my-5">
      <form onSubmit={handleSubmit}>
        {clientSecret && (
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        )}
        {isProcessing ? (
          <CircularProgress></CircularProgress>
        ) : (
          <button type="submit" disabled={!stripe || success}>
            Pay ${price}
          </button>
        )}
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </Container>
  );
};

export default CheckOutFrom;
