import { Box, Button, Grid, Typography } from '@mui/material';
import drone from '../../Images/Features/drone.png'
import laptop from '../../Images/Features/laptop.png'
import camera from '../../Images/Features/camara.png'
import React from 'react';

const Features = () => {
    return (
        <Box sx={{ m: 3 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#ABEBC6', p: 3, lineHeight: 3, borderRadius: 1 }}>
                            <Box>
                                <Typography variant='body2'>
                                    Up to 30% Off
                                </Typography>
                                <Typography variant='h6'>
                                    New Arrival 2021 (drone)
                                </Typography>
                                <Button variant="contained">Shop Now</Button>
                            </Box>
                            <Box>
                                <img src={drone} alt="" style={{ width: '230px' }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#C39BD3 ', p: 3, lineHeight: 3, borderRadius: 1 }}>
                            <Box>
                                <Typography variant='body2'>
                                    Up to 30% Off
                                </Typography>
                                <Typography variant='h6'>
                                    New Arrival 2021 (laptop)
                                </Typography>
                                <Button variant="contained">Shop Now</Button>
                            </Box>
                            <Box>
                                <img src={laptop} alt="" style={{ width: '250px' }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: '#7FB3D5', p: 3, lineHeight: 3, borderRadius: 1 }}>
                            <Box>
                                <Typography variant='body2'>
                                    Up to 30% Off
                                </Typography>
                                <Typography variant='h6'>
                                    New Arrival 2021 (camera)
                                </Typography>
                                <Button variant="contained">Shop Now</Button>
                            </Box>
                            <Box>
                                <img src={camera} alt="" style={{ width: '250px' }} />
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default Features;