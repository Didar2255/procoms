import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckOutFrom from '../CheckOutFrom/CheckOutFrom';

const stripePromise = loadStripe('pk_test_51JvmdxK1m0zkPuoVdtMKN8JANDJJAAXvXRUVVgYJKg1nuaDQw3owZVuFsLjH8zPdcX9KUlU4ndPOk05B325MPASH00adqnS96v');

const Payment = () => {
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(``)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div>
            <h5>Please Pay for: {'user.displayName'} for {order.productName}</h5>
            {order?.productPrice && <Elements stripe={stripePromise}>
                <CheckOutFrom>
                    order={order}
                </CheckOutFrom>
            </Elements>}
        </div>
    );
};

export default Payment;