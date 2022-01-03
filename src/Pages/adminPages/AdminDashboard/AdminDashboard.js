import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../../../components/DashboardHeader';

const links = [
  { name: 'Make Admin', path: '/admin/makeAdmin' },
  { name: 'Add Product', path: '/admin/addProduct' },
  { name: 'Manage All Orders', path: '/admin/makeAdmin' },
  { name: 'Manage All Products', path: '/admin/makeAdmin' },
];

const AdminDashboard = () => {
  return (
    <Box container style={{ minHeight: 'calc(100vh - 270px)' }} sx={{ mt: 3 }}>
      <DashboardHeader links={links} />
      <Outlet />
    </Box>
  );
};

export default AdminDashboard;
