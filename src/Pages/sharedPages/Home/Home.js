import { Box } from '@mui/material';
import React from 'react';
import Product from '../Products/Product/Product';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Features></Features>
      <Reviews />
    </Box>
  );
};

export default Home;
