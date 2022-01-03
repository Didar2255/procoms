import { Box } from '@mui/material';
import React from 'react';
import Product from '../Products/Product/Product';
import Banner from './Banner/Banner';
import Features from './Features/Features';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Features></Features>
      <Product></Product>
    </Box>
  );
};

export default Home;
