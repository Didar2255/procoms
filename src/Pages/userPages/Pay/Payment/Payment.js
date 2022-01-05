import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrders } from '../../../../redux/slices/order/orderSlice';
import CheckOutFrom from '../CheckOutFrom/CheckOutFrom';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_SECRET_KEY}`);

const Payment = () => {
  const user = useSelector((state) => state.auth.user);
  const allOrders = useSelector((state) => state.orders.allOrders);
  const myOrders = allOrders.filter(
    (allOrder) => allOrder.email === user.email
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);

  const price = myOrders.reduce((curr, prev) => curr + prev.price, 0);
  return (
    <Container
      sx={{
        minHeight: 'calc(100vh - 220px)',
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {price ? (
        <Typography variant="h3" sx={{ fontSize: { xs: 30, lg: 40 } }}>
          Your Total cost is: ${price}
        </Typography>
      ) : (
        <Typography variant="h3" sx={{ fontSize: { xs: 30, lg: 40 } }}>
          Nothing to pay
        </Typography>
      )}
      <Box sx={{ width: { xs: 400, md: 600 } }}>
        {price ? (
          <Elements stripe={stripePromise}>
            <CheckOutFrom price={price}></CheckOutFrom>
          </Elements>
        ) : null}
      </Box>
    </Container>
  );
};

export default Payment;
