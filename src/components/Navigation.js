import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ path, name }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none', color: '#000' }}>
      {name}
    </Link>
  );
};

export default Navigation;
