import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutFrom from '../CheckOutFrom/CheckOutFrom';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_SECRET_KEY}`);

const Payment = () => {
  const price = 150;
  return (
    <div>
      {price && (
        <Elements stripe={stripePromise}>
          <CheckOutFrom price={price}></CheckOutFrom>
        </Elements>
      )}
    </div>
  );
};

export default Payment;
