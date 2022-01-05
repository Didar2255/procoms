import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const createPaymentIntent = createAsyncThunk(
  'payment/createPaymentIntent',
  async (price) => {
    const response = await axios
      .post('https://evening-plains-37953.herokuapp.com/create-payment-intent', { price })
      .then((response) => response.data.clientSecret);
    return response;
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    price: 0,
    clientSecret: '',
    success: '',
    error: '',
    isProcessing: false,
  },
  reducers: {
    setIsProcessing: (state, { payload }) => {
      state.setIsProcessing = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    setSuccess: (state, { payload }) => {
      state.success = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPaymentIntent.fulfilled, (state, { payload }) => {
      state.clientSecret = payload;
    });
  },
});

export const { setIsProcessing, setError, setSuccess } = paymentSlice.actions;

export default paymentSlice.reducer;
