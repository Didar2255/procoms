import { Box } from '@mui/material';
import React from 'react';
import Payment from '../../userPages/Pay/Payment/Payment';
import Product from '../Products/Product/Product';
import Banner from './Banner/Banner';
import CustomerQuestion from './CutomerQuestion/CustomerQuestion';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Features></Features>
      <Product></Product>
      <CustomerQuestion />
      <Reviews />
      <Payment></Payment>
      <Subscribe></Subscribe>
    </Box>
  );
};

export default Home;
