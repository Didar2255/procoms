import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// create the thunk
export const fetchAllOrders = createAsyncThunk(
  'products/fetchAllOrders',
  async () => {
    const response = await axios
      .get('http://localhost:5000/orders')
      .then((response) => response.data);
    return response;
  }
);

export const createOrder = createAsyncThunk(
  'products/createOrder',
  async (data) => {
    const response = await axios
      .post('http://localhost:5000/orders', data)
      .then((response) => response.data);
    return response;
  }
);

export const updateOrderStatus = createAsyncThunk(
  'products/updateOrderStatus',
  async (id) => {
    const response = await axios
      .put(`http://localhost:5000/orders/${id}`)
      .then((response) => response.data);
    return response;
  }
);

const orderSlice = createSlice({
  name: 'products',
  initialState: {
    allOrders: [],
    singleProduct: {},
  },
  reducers: {
    removeFromOrder: (state, { payload }) => {
      state.allOrders = state.allOrders.filter(
        (product) => product._id !== payload
      );
    },
    updateStatus: (state, { payload }) => {
      state.allOrders = state.allOrders.map((allOrder) => {
        if (allOrder._id === payload) {
          allOrder.status = 'shipped';
        }
        return allOrder;
      });
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
  },
});

export const { removeFromOrder, updateStatus } = orderSlice.actions;

export default orderSlice.reducer;
