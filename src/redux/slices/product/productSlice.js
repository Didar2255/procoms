import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios
      .get('http://localhost:5000/products')
      .then((response) => response.data);
    return response;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addToProduct: (state, { payload }) => {
      state.products.push({ payload });
    },
    removeFromProduct: (state, { payload }) => {
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
  },
});

export const { addToProduct, removeFromProduct } = productSlice.actions;

export default productSlice.reducer;
