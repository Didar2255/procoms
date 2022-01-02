import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <Box >
            <Box className="footer-section">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginBottom: 3 }} >
                        <Grid item xs={12} sm={6} md={4} >
                            <Box >
                                <Typography variant='h5'> <i className="fas fa-shipping-fast"></i> Free Shipping</Typography>
                                <Typography variant='h6'>All Product Shipping From Indonesia</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} >
                            <Box >
                                <Typography variant='h5'> <i className="fas fa-shield-virus"></i> One Year Service</Typography>
                                <Typography variant='h6'>Service Guarantee After bye Any Product</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box>
                                <Typography variant='h5'> <i className="fas fa-phone-alt"></i> Online Support</Typography>
                                <Typography variant='h6'>24 Online Support from Our Showroom</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <hr />
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box className="footer-content">
                                <Typography variant='h5' className='ms-4 my-3'>Contact Us</Typography>
                                <Typography variant='body2'> <i className="fas fa-map-marker-alt icon"></i> Address : Banani,Model Town,Dhaka</Typography>
                                <Typography variant='body2'> <i className="fas fa-phone-alt icon"></i> Phone : +0881236459</Typography>
                                <Typography variant='body2'> <i className="far fa-envelope-open icon"></i> email: diderbokth2255@gmail.com</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Box className=" footer-content">
                                <Typography variant='h5' className='ms-4'>My Account</Typography>
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
                                <Typography variant='h5' className='ms-4'>Information</Typography>
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
                            <Box >
                                <Typography variant='body2'>
                                    In order to continue to be a company society wants to exist,
                                    Perfume Store aims to become the  “power” that supports.
                                </Typography>
                                <Box className="social-media">
                                    <i className="fab fa-facebook-square"></i>
                                    <i className="fab fa-instagram-square"></i>
                                    <i className="fab fa-linkedin"></i>
                                    <i className="fab fa-twitter-square"></i>
                                    <i className="fab fa-whatsapp-square"></i>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
            <Box className="footer-copy">
                <Typography variant='body2'>&copy; 2021 made by Procoms.com</Typography>
            </Box>
        </Box >
    );
};

export default Footer;