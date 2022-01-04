import { Box, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ width: { xs: 300, md: 345 }, my: { xs: 5, lg: 0 } }}>
      <Box className="box">
        <CardMedia
          component="img"
          height={240}
          image={product.image}
          alt={product.name}
          sx={{ width: '100%' }}
        />
        <Box className="box-content">
          <Box className="content">
            <ul className="details-icon">
              <li
                title="Quick View"
                onClick={() => navigate(`/products/${product._id}`)}
              >
                <AiFillEye className="icon" />
              </li>
              <li
                title="Add to cart"
                onClick={() => navigate(`/products/${product._id}`)}
              >
                <AiOutlineShoppingCart className="icon" />
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ maxWidth: 280 }}
        >
          {product.short_desc}
        </Typography>
        <Rating
          sx={{ my: 2 }}
          name="read-only"
          value={product.rating}
          readOnly
        />
        <Typography>${product.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
