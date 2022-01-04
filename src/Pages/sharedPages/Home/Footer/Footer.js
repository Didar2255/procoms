import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsInstagram,
  BsLinkedin,
  BsPhoneVibrateFill,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs';
import { FaPhoneVolume, FaShieldVirus } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Box className="footer-section">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ marginBottom: 3 }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="h5" sx={{ lineHeight: 2 }}>
                  {' '}
                  <AiOutlineShoppingCart /> Free Shipping
                </Typography>
                <Typography variant="body1">
                  All Product Shipping From Indonesia
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="h5" sx={{ lineHeight: 2 }}>
                  {' '}
                  <FaShieldVirus /> One Year Service
                </Typography>
                <Typography variant="body2">
                  Service Guarantee After bye Any Product
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="h5" sx={{ lineHeight: 2 }}>
                  {' '}
                  <FaPhoneVolume /> Online Support
                </Typography>
                <Typography variant="body2">
                  24 Online Support from Our Showroom
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <hr />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="h5" sx={{ lineHeight: 2 }}>
                  Contact Us
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <Box sx={{ fontSize: 30 }}>
                    <BiMap />
                  </Box>
                  <Typography variant="body2" sx={{ lineHeight: 2 }}>
                    Address : Banani,Model Town,Dhaka
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <Box sx={{ fontSize: 26 }}>
                    <BsPhoneVibrateFill />
                  </Box>
                  <Typography variant="body2" sx={{ lineHeight: 2 }}>
                    {' '}
                    Phone : +0881236459 / +088845445
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                  }}
                >
                  <Box sx={{ fontSize: 26 }}>
                    <BsFillEnvelopeFill />
                  </Box>
                  <Typography variant="body2" sx={{ lineHeight: 2 }}>
                    {' '}
                    email: diderbokth2255@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className=" footer-content">
                <Typography variant="h5" className="ms-4">
                  My Account
                </Typography>
                <ul>
                  <li>Personal Info</li>
                  <li>Orders</li>
                  <li>Address</li>
                  <li>My wishlist</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="footer-content">
                <Typography variant="h5" className="ms-4">
                  Information
                </Typography>
                <ul>
                  <li>Delivery</li>
                  <li>Prices Drop</li>
                  <li>New Products</li>
                  <li>Best sales</li>
                  <li>Sitemap</li>
                </ul>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body2">
                  In order to continue to be a company society wants to
                  exist,Procoms aims to become the “power” that supports.
                </Typography>
                <Box sx={{ m: 4, fontSize: 26, display: 'flex' }}>
                  <Box sx={{ mr: 2 }}>
                    <BsFacebook />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <BsInstagram />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <BsLinkedin />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <BsTwitter />
                  </Box>
                  <Box sx={{ mr: 2 }}>
                    <BsWhatsapp />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box className="footer-copy">
        <Typography variant="body2">&copy; 2021 made by Procoms.com</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
