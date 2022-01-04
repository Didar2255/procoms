import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/slices/product/productSlice';
import Product from '../Products/Product/Product';
import Banner from './Banner/Banner';
import CustomerQuestion from './CutomerQuestion/CustomerQuestion';
import Features from './Features/Features';
import Reviews from './Reviews/Reviews';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products.slice(0, 4));

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Box>
      <Banner></Banner>
      <Features></Features>
      {/* 4 demo products */}
      <Box sx={{ m: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
          Top Rated Products
        </Typography>
        <Grid container sx={{ justifyContent: 'space-evenly' }}>
          {products.map((product) => (
            <Grid item key={product._id}>
              <Product product={product}></Product>
            </Grid>
          ))}
        </Grid>
      </Box>
      <CustomerQuestion></CustomerQuestion>
      <Reviews />
      <Subscribe></Subscribe>
    </Box>
  );
};

export default Home;
