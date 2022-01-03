import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import bannerOne from '../../../../assets/Images/BannerImg/bannerOne.png';
import bannerThre from '../../../../assets/Images/BannerImg/bannerThree.png';
import bannerTwo from '../../../../assets/Images/BannerImg/bannerTwo.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const banners = [
  {
    subtitle: 'Best Seller',
    title: 'Creative Laptop',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem itaque recusandae vel nulla, provident praesentium, vitae dolorum explicabo ipsam dolor, doloremque temporibus animi dolore sint hic rem. Aspernatur, quae!',
    imgPath: bannerOne,
  },
  {
    subtitle: 'Best Seller',
    title: 'Creative Laptop',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem itaque recusandae vel nulla, provident praesentium, vitae dolorum explicabo ipsam dolor, doloremque temporibus animi dolore sint hic rem. Aspernatur, quae!',
    imgPath: bannerTwo,
  },
  {
    subtitle: 'Best Seller',
    title: 'Creative Laptop',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem itaque recusandae vel nulla, provident praesentium, vitae dolorum explicabo ipsam dolor, doloremque temporibus animi dolore sint hic rem. Aspernatur, quae!',
    imgPath: bannerThre,
  },
];

const Banner = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = banners.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {banners.map((step, index) => (
          <Box key={step.imgPath}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid
                container
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  px: 3,
                }}
              >
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{ mt: { xs: 3, md: 0 }, pl: { xs: 1, md: 3 } }}
                >
                  <Typography variant="subtitle">{step.subtitle}</Typography>
                  <Typography variant="h3">{step.title}</Typography>
                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {step.desc}
                  </Typography>
                  <Button variant="contained">Shop Now</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <img
                    src={step.imgPath}
                    alt=""
                    style={{ height: 400, width: '100%', mx: 'auto' }}
                  />
                </Grid>
              </Grid>
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </Box>
  );
};

export default Banner;
