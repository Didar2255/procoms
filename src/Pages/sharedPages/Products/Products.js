import { Container, Grid, Typography } from '@mui/material';
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
    <Container sx={{ my: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        Top Rated Products
      </Typography>
      <Grid container sx={{ justifyContent: 'space-evenly' }}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product._id} sx={{ mb: 3 }}>
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
