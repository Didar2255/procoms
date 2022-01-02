import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <Box>
      <Box>user Header or sidebar will be here</Box>
      <Outlet />
    </Box>
  );
};

export default UserDashboard;
