import { Box } from '@mui/material';
import React from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';

const SingleProductDetail = ({ product, handleClose }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: 3,
        p: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <AiFillCloseSquare
          color="red"
          size={50}
          style={{ cursor: 'pointer' }}
          onClick={handleClose}
        />
      </Box>
      the product price is {product.price}
    </Box>
  );
};

export default SingleProductDetail;
