import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/slices/product/productSlice';
import Product from './Product/Product';

const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
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
  );
};

export default Products;
