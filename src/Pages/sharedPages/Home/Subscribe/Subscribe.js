import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, backgroundColor: '#FDEDEC', p: 5, mb: 2, borderRadius: '5px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button variant='contained' sx={{ p: '22px', borderRadius: '0px' }}><BsFillEnvelopeFill /> </Button>
                            <TextField type="text" name="" id="" placeholder='Your Email Address' sx={{ py: 3, borderRadius: 'none', width: '80%' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box>
                            <Typography variant='h5' sx={{ lineHeight: 2, fontWeight: 600 }}>Latest news and update</Typography>
                            <Typography variant='body1'> <BsFillEnvelopeFill /> Subscribe Our News later , Get In Touch With Us.</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Subscribe;