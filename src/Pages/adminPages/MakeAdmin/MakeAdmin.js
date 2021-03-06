import { Alert, Snackbar, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const MakeAdmin = () => {
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
    const makeAdminData = {
      requester: user.email,
      ...data,
    };
    axios
      .put('https://evening-plains-37953.herokuapp.com/user/admin', makeAdminData)
      .then((response) => {
        if (response.data.modifiedCount === 0) {
          alert(
            'The admin allready exist or make sure the user exist in database.'
          );
        } else {
          setOpen(true);
          reset();
        }
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
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          new Admin successfully made
        </Alert>
      </Snackbar>
      <Box className="form__container">
        <Typography variant="h5">Make Admin</Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* new admin email */}
          <div className="input__box">
            <input
              placeholder="New Admin Email"
              {...register('newAdminEmail', {
                required: 'this is a required field',
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Please provide correct email address.',
                },
              })}
            />
          </div>
          {errors.newAdminEmail && (
            <Alert severity="error" variant="outlined">
              {errors.newAdminEmail.message}
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
            Make Admin
          </button>
        </form>
      </Box>
    </Box>
  );
};

export default MakeAdmin;
