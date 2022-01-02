import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { processSignIn } = useFirebase();

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleLogin = ({ email, password }) => {
    processSignIn(email, password, location, navigate);
    setValues({ email: '', password: '' });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{ minHeight: 'calc(100vh - 270px)' }}
      className="mb-3"
    >
      <Paper elevation={2} sx={{ maxWidth: 500, p: 3 }}>
        {/* email */}
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            value={values.name}
            onChange={handleChange('email')}
            label="email"
          />
        </FormControl>

        {/* password */}
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* login button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: { xs: '100%', md: '50%' },
              py: 2,
              borderRadius: 5,
            }}
            onClick={() => handleLogin(values)}
          >
            Login
          </Button>
        </Box>

        <Typography
          variant="subtitle1"
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: 3,
            justifyContent: 'flex-end',
          }}
        >
          <span>Don't have an account!</span>{' '}
          <Button
            sx={{
              borderBottom: '1px solid blue',
              py: 0,
              color: '#07456f',
              textTransform: 'none',
            }}
            onClick={() => navigate('/register')}
          >
            Register here
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
