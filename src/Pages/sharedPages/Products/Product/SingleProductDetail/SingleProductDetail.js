import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import './SingleProductDetail.css';

const SingleProductDetail = () => {
  const [product, setProduct] = useState();
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((response) => setProduct(response.data));
  }, [id]);

  const onSubmit = (data) => {};
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box sx={{ flexGrow: 1, my: 5 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              className="product-img"
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <img
                src={product?.image}
                alt=""
                style={{ width: '450px', paddingTop: 15 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Typography>{product?.name}</Typography>
              <Typography>${product?.price}</Typography>
            </Box>
            <Box className="purchase-form" sx={{ mt: 2 }}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('productName')} defaultValue="" />
                <input {...register('productPrice')} defaultValue="" />
                <input {...register('email')} defaultValue="" />
                <input {...register('date')} type="date" />
                <select {...register('color')}>
                  <option value="Black">Black</option>
                  <option value="Pink">Pink</option>
                  <option value="Blue">Blue</option>
                </select>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-around',
                      alignItems: 'center',
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="warning"
                      sx={{ px: 2, py: 1 }}
                    >
                      <AiOutlineMinus size={30} />
                    </Button>
                    <Typography variant="h4" sx={{ p: 2 }}>
                      1
                    </Typography>
                    <Button
                      variant="outlined"
                      color="success"
                      sx={{ px: 2, py: 1 }}
                    >
                      <AiOutlinePlus size={30} />
                    </Button>
                  </Box>
                  <Box>
                    <Button variant="contained" className="Add-cart-btn">
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="product-specification">
        <Box>
          <Typography>More Details</Typography>
          <ul>
            <li>
              Top notes of tart Italian lemon, crisp green apple and clean
            </li>
            <li>
              Cooling mint oil open the aroma with a burst of fresh exuberance,
              energizing
            </li>
            <li>
              Finally, base notes of Atlas cedar, fresh-cut Virginian cedar,
              oakmoss
            </li>
            <li>
              Brut has been the popular choice of men and sports stars in the UK
              since 1964.
            </li>
            <li>
              The sophisticated, spicy scent will make you feel confident with
              its fresh and distinctive fragrance.
            </li>
          </ul>
        </Box>
        <Box>
          <Typography>Key Specification</Typography>
          <ul>
            <li>Fully immerse yourself in the elegant and exotic Mancera</li>
            <li>
              Middle notes of heady Indonesian patchouli leaf, delicate violet
              and rich Bulgarian
            </li>
            <li>
              Dubai Amethyst by Bond No 9 is an amber floral fragrance for women
              and men
            </li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductDetail;
