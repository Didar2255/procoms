import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchAllReviews = createAsyncThunk(
  'orders/fetchAllReviews',
  async () => {
    const response = await axios
      .get('https://evening-plains-37953.herokuapp.com/reviews')
      .then((response) => response.data);
    return response;
  }
);

export const addReview = createAsyncThunk('orders/addReview', async (data) => {
  const response = await axios
    .post('https://evening-plains-37953.herokuapp.com/reviews', data)
    .then((response) => response.data);
  return response;
});

const orderSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllReviews.fulfilled, (state, { payload }) => {
      state.reviews = payload;
    });
    builder.addCase(addReview.fulfilled, (state, { payload }) => {
      state.reviews.push(payload);
    });
  },
});

export default orderSlice.reducer;
