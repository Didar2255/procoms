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
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
  const { processSignUp } = useFirebase();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

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

  const handleRegisterUser = ({ name, email, password }) => {
    processSignUp(name, email, password, navigate);
    setValues({ name: '', email: '', password: '' });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{ minHeight: 'calc(100vh - 270px)' }}
    >
      <Paper elevation={2} sx={{ maxWidth: 500, p: 3 }}>
        {/* name */}
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-name"
            value={values.name}
            onChange={handleChange('name')}
            label="Password"
          />
        </FormControl>

        {/* email */}
        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            value={values.email}
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

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: { xs: '100%', md: '50%' },
              py: 2,
              borderRadius: 5,
            }}
            onClick={() => handleRegisterUser(values)}
          >
            Register
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
          <span>Already Registered!</span>{' '}
          <Button
            sx={{
              borderBottom: '1px solid blue',
              py: 0,
              color: '#07456f',
              textTransform: 'none',
            }}
            onClick={() => navigate('/login')}
          >
            Login here
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
