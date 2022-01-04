import { Box } from '@mui/material';
import React from 'react';
import Payment from '../../userPages/Pay/Payment/Payment';
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
      <Reviews />
      <Payment></Payment>
    </Box>
  );
};

export default Home;
