import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import orderReducer from './slices/order/orderSlice';
import productReducer from './slices/product/productSlice';
import reviewSlice from './slices/review/reviewSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    orders: orderReducer,
    reviews: reviewSlice,
  },
});
