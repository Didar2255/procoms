import { List, ListItem, ListItemText } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ links }) => {
  const navigate = useNavigate();
  return (
    <List
      sx={{
        display: { xs: 'block', md: 'flex' },
        backgroundColor: { xs: 'white', md: pink[500] },
        color: 'white',
        maxWidth: { xs: '90%', md: '80%' },
        mx: 'auto',
        borderRadius: 44,
        px: { xs: 3, md: 5 },
      }}
    >
      {links.map((link) => (
        <ListItem
          sx={{
            backgroundColor: pink[700],
            mx: 3,
            mb: { xs: 1, md: 0 },
            borderRadius: 44,
          }}
          button
          key={link.name}
          onClick={() => navigate(`${link.path}`)}
        >
          <ListItemText sx={{ textAlign: 'center' }} primary={link.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default DashboardHeader;
