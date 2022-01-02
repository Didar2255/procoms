import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    authError: '',
    isLoading: true,
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
  },
});

export const { registerUser, setAuthError, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
