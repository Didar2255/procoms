import { Avatar, Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../../../assets/avatar.png';
import Navigation from '../../../../../components/Navigation';

const ProflieMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // find the user role from database
  const isAdmin = false;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    // will logout from here
    navigate('/');
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Avatar
          sx={{ ml: 'auto', width: 60, height: 60, cursor: 'pointer' }}
          src={avatar}
          alt="profile picture"
        />
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          {isAdmin ? (
            <Navigation name="dashboard" path="/adminDashboard" />
          ) : (
            <Navigation name="dashboard" path="/userdashboard"></Navigation>
          )}
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="outlined" onClick={handleLogOut}>
            Logout
          </Button>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProflieMenu;
