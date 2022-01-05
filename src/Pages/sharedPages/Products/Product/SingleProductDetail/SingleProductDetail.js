import {
  Alert,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { createOrder } from '../../../../../redux/slices/order/orderSlice';
import { fetchSingleProduct } from '../../../../../redux/slices/product/productSlice';

const SingleProductDetail = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { user, admin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id]);

  const onSubmit = (data) => {
    const order_time = new Date().toDateString();
    const newOrder = {
      name: user.name,
      email: user.email,
      order_time,
      product_id: id,
      price: product.price,
      ...data,
    };
    if (admin) {
      alert("You're admin. you don't have to buy products");
    } else {
      dispatch(createOrder(newOrder)).then(() => navigate('/user/myOrders'));
    }
  };

  return (
    <Box style={{ minHeight: 'calc(100vh - 270px)' }}>
      <Box
        sx={{
          display: 'flex',
          justifyCcontent: 'center',
          alignItems: 'center',
          my: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: '95%', mx: 'auto' }}>
              <CardContent
                sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: 'info.main' }}
                >
                  {product.name}
                </Typography>
                <Typography variant="h5" sx={{ color: 'error.main' }}>
                  ${product.price}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  maxHeight: 350,
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className="form__container" sx={{ mx: 'auto', width: '90%' }}>
              <Typography variant="h5">Add Product</Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name of the user */}
                <div className="input__box">
                  <input value={user?.name} readOnly />
                </div>

                {/* email of the user */}
                <div className="input__box">
                  <input value={user?.email} readOnly />
                </div>

                <div className="input__box">
                  <textarea
                    placeholder="Your address"
                    {...register('address', {
                      required: 'this field is required',
                      minLength: {
                        value: 3,
                        message: 'Please give more long address',
                      },
                    })}
                  />
                </div>

                {errors.address && (
                  <Alert severity="error" variant="outlined">
                    {errors.address.message}
                  </Alert>
                )}

                {/* rating of the food */}
                <div className="input__box">
                  <input
                    placeholder="Your Phone"
                    {...register('phone', {
                      required: 'this field is required',
                    })}
                  />
                </div>
                {errors.phone && (
                  <Alert severity="error" variant="outlined">
                    {errors.phone.message}
                  </Alert>
                )}

                <button
                  type="submit"
                  className="submit__btn"
                  style={{
                    display: 'block',
                    cursor: 'pointer',
                    padding: '10px 0',
                    width: '50%',
                    margin: '0 auto',
                    backgroundColor: pink[600],
                    color: 'white',
                    borderRadius: 5,
                    border: 0,
                  }}
                >
                  Purchase
                </button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ ml: 5 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
          More about the Product
        </Typography>
        <Typography variant="h5">{product.long_desc}</Typography>
      </Box>
    </Box>
  );
};

export default SingleProductDetail;
