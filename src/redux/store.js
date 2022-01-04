import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import productReducer from './slices/product/productSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});
