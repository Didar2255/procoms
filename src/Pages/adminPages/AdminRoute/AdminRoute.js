import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // admin will be false
  const admin = true; // user.isAdmin (later come from database)

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  return user.email && (admin || !isLoading) ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default AdminRoute;
