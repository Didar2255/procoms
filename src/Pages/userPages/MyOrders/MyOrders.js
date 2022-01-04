import {
  Alert,
  Button,
  Container,
  Grid,
  Snackbar,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  cancelOrder,
  fetchAllOrders,
  removeFromOrder,
} from '../../../redux/slices/order/orderSlice';
import MyOrderCard from './MyOrdersCard/MyOrderCard';

const MyOrders = () => {
  const [open, setOpen] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const allOrders = useSelector((state) => state.orders.allOrders);
  const myOrders = allOrders.filter(
    (allOrder) => allOrder.email === user.email
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  // no product ordered by user
  if (myOrders.length === 0) {
    return (
      <Box
        sx={{
          minHeight: 'calc(100vh - 220px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mt: 3,
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5">
          You haven't Ordered any product yet. Or Maybe the admin have removed the
          product or rejected your order.
        </Typography>
        <Button onClick={() => navigate('/products')}>Order Now</Button>
      </Box>
    );
  }

  const handleCancelOrder = (id) => {
    dispatch(cancelOrder(id)).then(() => {
      dispatch(removeFromOrder(id));
      setOpen(true);
    });
  };

  return (
    <Container sx={{ minHeight: 'calc(100vh - 220px)', mt: 3 }}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Order successfully deleted
        </Alert>
      </Snackbar>
      <Grid container spacing={3}>
        {myOrders.map((myOrder) => (
          <MyOrderCard
            key={myOrder._id}
            myOrder={myOrder}
            handleCancelOrder={handleCancelOrder}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default MyOrders;
