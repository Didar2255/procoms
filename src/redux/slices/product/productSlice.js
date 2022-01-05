import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios
      .get('https://evening-plains-37953.herokuapp.com/products')
      .then((response) => response.data);
    return response;
  }
);

export const addProducts = createAsyncThunk(
  'products/addProducts',
  async (data) => {
    const response = await axios
      .post('https://evening-plains-37953.herokuapp.com/products', data)
      .then((response) => response.data);
    return response;
  }
);

export const deleteProducts = createAsyncThunk(
  'products/deleteProducts',
  async (id) => {
    const response = await axios
      .delete(`https://evening-plains-37953.herokuapp.com/products/${id}`)
      .then((response) => response.data);
    return response;
  }
);

export const fetchSingleProduct = createAsyncThunk(
  'products/fetchSingleProduct',
  async (id) => {
    const response = await axios
      .get(`https://evening-plains-37953.herokuapp.com/products/${id}`)
      .then((response) => response.data);
    return response;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    singleProduct: {},
  },
  reducers: {
    removeFromProduct: (state, { payload }) => {
      console.log(payload);
      state.products = state.products.filter(
        (product) => product._id !== payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      // Add cards to the state array
      state.products = payload;
    });
    builder.addCase(addProducts.fulfilled, (state, { payload }) => {
      state.products.push(payload);
    });
    builder.addCase(deleteProducts.fulfilled, (state, { payload }) => { });
    builder.addCase(fetchSingleProduct.fulfilled, (state, { payload }) => {
      // Add cards to the state array
      state.singleProduct = payload;
    });
  },
});

export const { removeFromProduct } = productSlice.actions;

export default productSlice.reducer;
