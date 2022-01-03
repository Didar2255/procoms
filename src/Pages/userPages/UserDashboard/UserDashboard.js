import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardHeader from '../../../components/DashboardHeader';

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
  return (
    <Box container style={{ minHeight: 'calc(100vh - 270px)' }} sx={{ mt: 3 }}>
      <DashboardHeader links={links} />
      <Outlet />
    </Box>
  );
};

export default UserDashboard;
