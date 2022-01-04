import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Avatar from '../assets/avatar.png';

const Profile = ({ photo, name }) => {
  return (
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
        src={photo ? photo : Avatar}
        alt="profile"
        height="380"
        sx={{ mb: 3 }}
      />
      <Typography variant="h5">
        Welcome {name}, explore your dashboard
      </Typography>
    </Box>
  );
};

export default Profile;
