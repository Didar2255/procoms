import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardHeader from '../../../components/DashboardHeader';
import Profile from '../../../components/Profile';

const links = [
  { name: 'Make Admin', path: '/admin/makeAdmin' },
  { name: 'Add Product', path: '/admin/addProduct' },
  { name: 'Manage All Orders', path: '/admin/manageAllOrders' },
  { name: 'Manage All Products', path: '/admin/manageAllProducts' },
];

const AdminDashboard = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);

  return (
    <Box container style={{ minHeight: 'calc(100vh - 270px)' }} sx={{ mt: 3 }}>
      <DashboardHeader links={links} />
      {(pathname === '/admin' || pathname === '/admin/') && (
        <Profile name={user.name} photo={user.photoURL} />
      )}
      <Outlet />
    </Box>
  );
};

export default AdminDashboard;
