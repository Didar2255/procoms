import React from 'react';
import { Box, Button, Container, Grid, TextareaAutosize, TextField, Typography } from '@mui/material';
import emailjs from 'emailjs-com';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import logo1 from '../../../assets/Images/Logo/apple.jpg'
import logo2 from '../../../assets/Images/Logo/mi.jpg'
import logo3 from '../../../assets/Images/Logo/one.jpg'
import logo4 from '../../../assets/Images/Logo/oppo.jpg'
import logo5 from '../../../assets/Images/Logo/samsung.jpg'

const ContactUs = () => {
  const SendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_b08zqk6', 'template_h5osdeq', e.target, 'user_R4KvZ7qws6ZUrAFZJXEEs')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  }
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ textAlign: 'center', backgroundColor: '#EBF5FB', p: 8 }}>
        <Typography variant='h5' sx={{ fontWeight: 600, lineHeight: 2 }}>
          CONTACT
        </Typography>
        <Typography variant='body2'>
          <Link to='/'>
            Home
          </Link>
          / Contact Us
        </Typography>
      </Box>
      <Container>
        <Slider {...settings}>
          <Box>
            <img src={logo1} alt="" />
          </Box>
          <Box>
            <img src={logo2} alt="" />
          </Box>
          <Box>
            <img src={logo3} alt="" />
          </Box>
          <Box>
            <img src={logo4} alt="" />
          </Box>
          <Box>
            <img src={logo5} alt="" />
          </Box>
        </Slider>
      </Container>
      <Box sx={{ textAlign: 'center', my: 2 }}>
        <Typography variant='body1'>
          Got a question? We had love to hear from you. <br /> Send us a message and we will respond as soon as possible.
        </Typography>
      </Box>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5} >
            <Box sx={{ backgroundColor: '#EBF5FB', p: 5, minHeight: '420px' }}>
              <Typography variant='h5' sx={{ ml: 2, fontWeight: 600 }}>Contact Info</Typography>
              <Box sx={{ m: 2 }}>
                <Typography variant='h6'>Address : </Typography>
                <Typography variant='body1'>Dhaka - 1207, Bangladesh</Typography>
              </Box>
              <Box sx={{ m: 2 }}>
                <Typography variant='h6'> Phone : </Typography>
                <Typography variant='body1'>+0881234561256</Typography>
              </Box>
              <Box sx={{ m: 2 }}>
                <Typography variant='h6'>Email :</Typography>
                <Typography variant='body1'>procoms123@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <Box sx={{ backgroundColor: '#EBF5FB', p: 5 }}>
              <Typography variant='h5' sx={{ ml: 2, fontWeight: 600 }}>Get In Touch</Typography>
              <Box >
                <form onSubmit={SendEmail}>
                  <Box sx={{ m: 2 }}>
                    <TextField type="text" placeholder='Your Name *' name='name' style={{ width: '100%', backgroundColor: '#fff' }} />
                  </Box>
                  <Box sx={{ m: 2 }}>
                    <TextField type="text" placeholder='Your Email *' name='email' style={{ width: '100%', backgroundColor: '#fff' }} />
                  </Box>
                  <Box sx={{ m: 2 }}>
                    <TextField type="text" placeholder='Write a Subject *' name='subject' style={{ width: '100%', backgroundColor: '#fff' }} />
                  </Box>
                  <Box sx={{ m: 2 }}>
                    <TextareaAutosize name="message" id="message" placeholder='Write your massage' minRows={5} style={{ width: '100%' }}></TextareaAutosize>
                  </Box>
                  <Box sx={{ m: 2 }}>
                    <Button variant='contained' type='submit' sx={{ width: '100%' }}>Submit</Button>
                  </Box>
                </form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
};

export default ContactUs;
