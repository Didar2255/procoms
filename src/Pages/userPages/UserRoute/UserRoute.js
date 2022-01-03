import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const UserRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state.auth);
  const location = useLocation();

  // admin will be false
  const admin = useSelector((state) => state.auth.admin);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  return user.email && !admin ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default UserRoute;
