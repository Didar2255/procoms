import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { CircularProgress, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CheckOutFrom = ({ order }) => {
    const stripe = useStripe()
    const elements = useElements();
    const user = useSelector(state => state.auth.user)

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('')

    useEffect(() => {
        axios.post('http://localhost:5000/create-payment-intent', {
            price: order
        })
            .then(response => setClientSecret(response.data.clientSecret))
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            setSuccess('')
        } else {
            setError('')
            console.log(paymentMethod);
        }
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name,
                        email: user?.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setSuccess('Your payment processed successfully')
            setError('')
            setProcessing(false)
        }
    }
    return (
        <Container className='my-5'>
            <form onSubmit={handleSubmit}>
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
                {processing ? <CircularProgress></CircularProgress> : <button type="submit" disabled={!stripe || success} >
                    Pay ${order}
                </button>}
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </Container>
    );
};

export default CheckOutFrom;