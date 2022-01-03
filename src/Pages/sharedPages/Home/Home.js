import { Box } from '@mui/material';
import React from 'react';
import MyOrderCard from '../../userPages/MyOrders/MyOrdersCard/MyOrderCard';
import Product from '../Products/Product/Product';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Features></Features>
      <Product></Product>
      <MyOrderCard></MyOrderCard>
      <Reviews />
    </Box>
  );
};

export default Home;
