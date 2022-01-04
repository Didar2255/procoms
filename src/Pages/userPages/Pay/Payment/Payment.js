import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckOutFrom from '../CheckOutFrom/CheckOutFrom';
import { useSelector } from 'react-redux';

const stripePromise = loadStripe('pk_test_51JvmdxK1m0zkPuoVdtMKN8JANDJJAAXvXRUVVgYJKg1nuaDQw3owZVuFsLjH8zPdcX9KUlU4ndPOk05B325MPASH00adqnS96v');

const Payment = () => {
    const user = useSelector(state => state.auth.user)
    const productPrice = 150;
    return (
        <div>
            <h5>Please Pay for: {user.name}</h5>
            {productPrice && <Elements stripe={stripePromise}>
                <CheckOutFrom>
                    order={productPrice}
                </CheckOutFrom>
            </Elements>}
        </div>
    );
};

export default Payment;