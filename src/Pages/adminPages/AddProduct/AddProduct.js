import { Alert, Snackbar, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post('https://guarded-sierra-90712.herokuapp.com/bikes', data)
      .then(() => {
        setOpen(true);
      });
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 220px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 3,
        flexDirection: 'column',
      }}
    >
      <Snackbar
        sx={{ mt: 7 }}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          product successfully added
        </Alert>
      </Snackbar>
      <Box className="form__container">
        <Typography variant="h5">Add Product</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name of the product */}
          <div className="input__box">
            <input
              placeholder="product name"
              {...register('name', {
                required: 'this field is required',
                minLength: {
                  value: 3,
                  message: 'product name should be bigger than 3 characters',
                },
                maxLength: {
                  value: 15,
                  message: 'Product name should be within 15 characters',
                },
              })}
            />
          </div>
          {errors.name && (
            <Alert severity="error" variant="outlined">
              {errors.name.message}
            </Alert>
          )}

          <div className="input__box">
            <textarea
              placeholder="short description of the product"
              {...register('short_desc', {
                required: 'this field is required',
                minLength: {
                  value: 3,
                  message: 'at least add something about the product',
                },
                maxLength: {
                  value: 100,
                  message: "don't add too much info about the product.",
                },
              })}
            />
          </div>

          {errors.long_desc && (
            <Alert severity="error" variant="outlined">
              {errors.desc.message}
            </Alert>
          )}

          <div className="input__box">
            <textarea
              placeholder="long description of the product"
              {...register('logng_desc', {
                required: 'this field is required',
                minLength: {
                  value: 50,
                  message: 'write some more about the product',
                },
                maxLength: {
                  value: 500,
                  message: "don't add too much info about the product.",
                },
              })}
            />
          </div>

          {errors.long_desc && (
            <Alert severity="error" variant="outlined">
              {errors.desc.message}
            </Alert>
          )}

          {/* image url of the product */}
          <div className="input__box">
            <input
              placeholder="Image url"
              {...register('image', {
                required: 'this field is required',
                pattern: {
                  value: /(https?:)?\/\/?[^'"<>]+?\.(jpg|jpeg|gif|png)/,
                  message: 'sorry! this is not an image url',
                },
              })}
            />
          </div>
          {errors.image && (
            <Alert severity="error" variant="outlined" sx={{ mb: 3 }}>
              {errors.image.message}
            </Alert>
          )}

          {/* price of the product */}
          <div className="input__box">
            <input
              type="number"
              placeholder="product price"
              {...register('price', {
                required: 'this field is required',
                min: {
                  value: 1000,
                  message: 'price should be between 1000 to 50000',
                },
                max: {
                  value: 50000,
                  message: 'rating should be between 1000 to 50000',
                },
              })}
            />
          </div>
          {errors.price && (
            <Alert severity="error" variant="outlined">
              {errors.price.message}
            </Alert>
          )}

          {/* rating of the product */}
          <div className="input__box">
            <input
              type="number"
              placeholder="rating of the product"
              {...register('rating', {
                required: 'this field is required',
                min: {
                  value: 0,
                  message: 'price should be between 1000 to 50000',
                },
                max: {
                  value: 5,
                  message: 'rating should be between 1000 to 50000',
                },
              })}
            />
          </div>
          {errors.rating && (
            <Alert severity="error" variant="outlined">
              {errors.price.message}
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
            Add Product
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default AddProduct;
