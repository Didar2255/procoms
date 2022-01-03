import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import computer from '../../../../assets/Images/About/about.jpg';
import './Product.css';

const Product = () => {
  return (
    <Container>
      <Card sx={{ maxWidth: 345, my: 5 }}>
        <Box class="box">
          <CardMedia
            component="img"
            height="200px"
            image={computer}
            alt="green iguana"
            style={{ width: '350px' }}
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
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default Product;
