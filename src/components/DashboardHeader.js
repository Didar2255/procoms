import { List, ListItem, ListItemText } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardHeader = ({ links }) => {
  const navigate = useNavigate();
  return (
    <List
      sx={{
        display: 'flex',
        backgroundColor: red[500],
        color: 'white',
        width: '50%',
        mx: 'auto',
        borderRadius: 44,
        px: 5,
      }}
    >
      {links.map((link) => (
        <ListItem
          sx={{ backgroundColor: red[600], mx: 3, borderRadius: 44 }}
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
