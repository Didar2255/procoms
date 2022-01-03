import { Box, Container, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import computer from '../../../../assets/Images/About/about.jpg';
import './Product.css';

const Product = ({ product }) => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345, my: { xs: 5, lg: 0 } }}>
        <Box className="box">
          <CardMedia
            component="img"
            height="200px"
            image={computer}
            alt={product.name}
          />
          <Box className="box-content">
            <Box className="content">
              <ul className="details-icon">
                <li title="Quick View">
                  <AiFillEye className="icon" />
                </li>
                <li title="Add to cart">
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
          <Typography variant="body2" color="text.secondary">
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
    </Container>
  );
};

export default Product;
