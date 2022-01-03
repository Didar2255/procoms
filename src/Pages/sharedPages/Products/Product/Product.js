import { Box, Container, Modal, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';
import { AiFillEye, AiOutlineShoppingCart } from 'react-icons/ai';
import './Product.css';
import SingleProductDetail from './SingleProductDetail/SingleProductDetail';

const Product = ({ product }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Card sx={{ maxWidth: 345, my: { xs: 5, lg: 0 } }}>
        <Box className="box">
          <CardMedia
            component="img"
            height="200px"
            image={product.image}
            alt={product.name}
            sx={{ maxWidth: 290, mx: 'auto' }}
          />
          <Box className="box-content">
            <Box className="content">
              <ul className="details-icon">
                <li title="Quick View" onClick={handleOpen}>
                  <AiFillEye className="icon" />
                </li>
                <li title="Add to cart" onClick={handleOpen}>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SingleProductDetail product={product} handleClose={handleClose} />
      </Modal>
    </Container>
  );
};

export default Product;
