import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/Images/About/about.jpg';
import vision from '../../../assets/Images/About/mission.png';
import mission from '../../../assets/Images/About/vission.png';
const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Container>
        <Box sx={{ backgroundColor: '#EBF5FB ', p: 1, textAlign: 'right' }}>
          <Typography variant="h6" sx={{ mr: 3 }}>
            About Us
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', p: 3 }}>
          <Typography variant="body2">
            WELCOME TO PROCOMS DIRECT, THE BANGLADESH PREMIER ONLINE GADGET AND
            GEAR FOR LAPTOP,
            <br /> DESKTOP, CAMERA, DRONE CAMERA,CCTV, LAPTOP, MOBILE
            ACCESSORIES.
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            my: 7,
            backgroundColor: '#EBF5FB ',
            p: 4,
            borderRadius: 1,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <Typography variant="h6">Our Company</Typography>
                <Typography variant="body2" sx={{ my: 3 }}>
                  We have built an extensive global network of brands and
                  suppliers which enables us to source the latest fragrance at a
                  great price ,which is the reason. We are able to keep our
                  prices low.
                </Typography>
                <Typography variant="body2" sx={{ my: 3 }}>
                  <li>Top Quality Product</li>
                  <li>Best Customer Service</li>
                  <li>30 Days money back guarantee</li>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img src={img1} alt="" style={{ width: '450px' }} />
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <img src={mission} alt="" />
                <Typography variant="h6">Our Mission</Typography>
                <Typography variant="body2">
                  TO SUPPLY THE BIGGEST FRAGRANCE & COSMETICS BRANDS AT
                  AFFORDABLE PRICES.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box>
                <img src={vision} alt="" />
                <Typography variant="h6">Our Vision</Typography>
                <Typography variant="body2">
                  TO PROVIDE AN EXCEPTIONAL SHOPPING EXPERIENCE WITH AN EASY TO
                  USE WEBSITE, FAST SHIPPING & OUTSTANDING CUSTOMER SERVICE.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            textAlign: 'center',
            mt: 5,
            p: 5,
            lineHeight: 3,
            backgroundColor: '#EBF5FB',
            borderRadius: 1,
          }}
        >
          <Typography variant="h6">New In !</Typography>
          <Typography variant="body2">
            Our latest collection is a combination of our designer's vision and
            our technical expert's invention. <br /> Take Dobrada for example,
            an eye-catching. Lightweight hybrid with boat shoe detailing{' '}
          </Typography>
          <Button
            variant="contained"
            sx={{ color: 'white' }}
            onClick={() => navigate('/products')}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

/* 


 

*/
