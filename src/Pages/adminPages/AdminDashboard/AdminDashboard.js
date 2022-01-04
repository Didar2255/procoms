import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import Avatar from '../../../assets/avatar.png';
import DashboardHeader from '../../../components/DashboardHeader';

const links = [
  { name: 'Make Admin', path: '/admin/makeAdmin' },
  { name: 'Add Product', path: '/admin/addProduct' },
  { name: 'Manage All Orders', path: '/admin/makeAdmin' },
  { name: 'Manage All Products', path: '/admin/makeAdmin' },
];

const AdminDashboard = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    <Box container style={{ minHeight: 'calc(100vh - 270px)' }} sx={{ mt: 3 }}>
      <DashboardHeader links={links} />
      {pathname === '/admin' ||
        (pathname === '/admin/' && (
          <Box
            sx={{
              minHeight: 'calc(100vh - 220px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mb: 3,
              flexDirection: 'column',
            }}
          >
            <img
              src={user.photoURL ? user.photoURL : Avatar}
              alt="profile"
              height="380"
              sx={{ mb: 3 }}
            />
            <Typography variant="h5">
              Welcome {user.name}, explore your dashboard
            </Typography>
          </Box>
        ))}
      <Outlet />
    </Box>
  );
};

export default AdminDashboard;
