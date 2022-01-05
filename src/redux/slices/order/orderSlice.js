import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchAllOrders = createAsyncThunk(
  'orders/fetchAllOrders',
  async () => {
    const response = await axios
      .get('https://evening-plains-37953.herokuapp.com/orders')
      .then((response) => response.data);
    return response;
  }
);

export const createOrder = createAsyncThunk(
  'orders/createOrder',
  async (data) => {
    const response = await axios
      .post('https://evening-plains-37953.herokuapp.com/orders', data)
      .then((response) => response.data);
    return response;
  }
);

export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async (id) => {
    const response = await axios
      .put(`https://evening-plains-37953.herokuapp.com/orders/${id}`)
      .then((response) => response.data);
    return response;
  }
);

export const cancelOrder = createAsyncThunk(
  'orders/cancelOrder',
  async (id) => {
    const response = axios
      .delete(`https://evening-plains-37953.herokuapp.com/orders/${id}`)
      .then((response) => response.data);
    return response;
  }
);

export const removeAllOrderOfUser = createAsyncThunk(
  'orders/removeAllOrderOfUser',
  async (email) => {
    const response = axios
      .delete(`https://evening-plains-37953.herokuapp.com/orders?email=${email}`)
      .then((response) => response.data);
    return response;
  }
);

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    allOrders: [],
  },
  reducers: {
    removeFromOrder: (state, { payload }) => {
      state.allOrders = state.allOrders.filter(
        (order) => order._id !== payload
      );
    },
    removeSpecificUserOrder: (state, { payload }) => {
      state.allOrders = state.allOrders.filter(
        (order) => order.email !== payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrders.fulfilled, (state, { payload }) => {
      state.allOrders = payload;
    });
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      state.allOrders.push(payload);
    });
    builder.addCase(updateOrderStatus.fulfilled, (state, { payload }) => {
      state.singleProduct = payload;
    });
    builder.addCase(cancelOrder.fulfilled, (state, { payload }) => { });
    builder.addCase(removeAllOrderOfUser.fulfilled, (state, { payload }) => { });
  },
});

export const { removeFromOrder, removeSpecificUserOrder } = orderSlice.actions;

export default orderSlice.reducer;
