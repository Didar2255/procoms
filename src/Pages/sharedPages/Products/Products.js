import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((response) => setProducts(response.data));
  }, []);
  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        Top Rated Products
      </Typography>
      <Grid container sx={{ justifyContent: 'space-evenly' }}>
        {products.slice(0, 4).map((product) => (
          <Grid item key={product._id}>
            <Product product={product}></Product>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
