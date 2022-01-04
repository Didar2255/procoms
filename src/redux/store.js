import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import orderReducer from './slices/order/orderSlice';
import productReducer from './slices/product/productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    order: orderReducer,
  },
});
