import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Box>
      <Box>sidebar or header of admin dashboard</Box>
      <Outlet />
    </Box>
  );
};

export default AdminDashboard;
