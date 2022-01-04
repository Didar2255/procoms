import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import DashboardHeader from '../../../components/DashboardHeader';
import Profile from '../../../components/Profile';

const links = [
  {
    name: 'Pay',
    path: '/user/pay',
  },
  {
    name: 'MyOrders',
    path: '/user/myOrders',
  },
  {
    name: 'Add Review',
    path: '/user/addReview',
  },
];

const UserDashboard = () => {
  const { pathname } = useLocation();
  const user = useSelector((state) => state.auth.user);

  return (
    <Box container style={{ minHeight: 'calc(100vh - 270px)' }} sx={{ mt: 3 }}>
      <DashboardHeader links={links} />
      {(pathname === '/user' || pathname === '/user/') && (
        <Profile name={user.name} photo={user.photoURL} />
      )}
      <Outlet />
    </Box>
  );
};

export default UserDashboard;
