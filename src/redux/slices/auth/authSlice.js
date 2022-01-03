import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    authError: '',
    isLoading: true,
    admin: false,
  },
  reducers: {
    registerUser: (state, { payload }) => {
      state.user = payload;
    },
    setAuthError: (state, { payload }) => {
      state.authError = payload;
    },
    setIsLoading: (state, { payload }) => {
      state.isLoading = payload;
    },
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
  },
});

export const { registerUser, setAuthError, setIsLoading, setAdmin } =
  authSlice.actions;

export default authSlice.reducer;
