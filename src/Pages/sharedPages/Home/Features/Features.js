import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import camera from '../../../../assets/Images/Features/camara.png';
import drone from '../../../../assets/Images/Features/drone.png';
import laptop from '../../../../assets/Images/Features/laptop.png';

const Features = () => {
  const features = [
    {
      discount: 'Up to 30% Off',
      name: 'New Arrival 2022 (drone)',
      image: drone,
      bgColor: '#ABEBC6',
    },
    {
      discount: 'Up to 30% Off',
      name: 'New Arrival 2022 (laptop)',
      image: laptop,
      bgColor: '#C39BD3',
    },
    {
      discount: 'Up to 30% Off',
      name: 'New Arrival 2022 (camera)',
      image: camera,
      bgColor: '#7FB3D5',
    },
  ];

  return (
    <Box sx={{ m: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
            New Features 2022
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {features.map((feature) => (
            <Grid key={feature.name} item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  backgroundColor: feature.bgColor,
                  p: { xs: 2, md: 3 },
                  borderRadius: 3,
                  height: 200,
                }}
              >
                <Box>
                  <Typography variant="subtitle2">
                    {feature.discount}
                  </Typography>
                  <Typography variant="h6">{feature.name}</Typography>
                  <Button variant="contained" sx={{ mt: 1 }}>
                    Shop Now
                  </Button>
                </Box>
                <Box sx={{ width: { xs: '60%', md: '50%' } }}>
                  <img src={feature.image} alt="" style={{ width: '100%' }} />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Features;
