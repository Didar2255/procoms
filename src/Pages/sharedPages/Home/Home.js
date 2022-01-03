import { Box } from '@mui/material';
import React from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Features></Features>
      <Products />
      <Reviews />
    </Box>
  );
};

export default Home;
