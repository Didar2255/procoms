import { Alert, Snackbar, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../../../redux/slices/review/reviewSlice';

const AddReview = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const user = useSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, name: user.name };

    dispatch(addReview(newData)).then(() => {
      setOpen(true);
      reset();
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 250px)',
        mt: 3,
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thanks for giving us a review
        </Alert>
      </Snackbar>
      <Box className="form__container">
        <Typography variant="h5">Add Review</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name of the user */}
          <div className="input__box">
            <input value={user.name} readOnly />
          </div>

          <div className="input__box">
            <textarea
              placeholder="Share your thoughts"
              {...register('message', {
                required: 'this field is required',
                minLength: {
                  value: 3,
                  message: 'at least write something about our service',
                },
                maxLength: {
                  value: 30,
                  message: 'Please share your thoughts within 30 words',
                },
              })}
            />
          </div>

          {errors.message && (
            <Alert severity="error" variant="outlined">
              {errors.message.message}
            </Alert>
          )}

          {/* rating of the user */}
          <div className="input__box">
            <input
              type="number"
              placeholder="Give rating between 0 to 5"
              {...register('rating', {
                required: 'this field is required',
                min: {
                  value: 0,
                  message: 'Give rating between 0 to 5',
                },
                max: {
                  value: 5,
                  message: 'Gvie rating between 0 to 5',
                },
              })}
            />
          </div>
          {errors.rating && (
            <Alert severity="error" variant="outlined" sx={{ mb: 2 }}>
              {errors.rating.message}
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

export default AddReview;
