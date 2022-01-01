import './Banner.css'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useState } from 'react';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://i.ibb.co/Gk2hjXj/Laptop.png',
    },
    {
        label: 'Bird',
        imgPath:
            'https://i.ibb.co/S0Y91vX/Mobile.png',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://i.ibb.co/GkfMsqc/camera.png'
    },
];


const Banner = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

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
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', lineHeight: 5, backgroundColor: '#e7e7e7', p: 8 }}>
                                <Box sx={{ width: '50%' }}>
                                    <Typography variant='h5' >
                                        Best Seller
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontWeight: 600 }}>
                                        Creative Laptop
                                    </Typography>
                                    <Typography variant='body1' >
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolorem itaque recusandae vel nulla, provident praesentium, vitae dolorum explicabo ipsam dolor, doloremque temporibus animi dolore sint hic rem. Aspernatur, quae!
                                    </Typography>
                                    <Button variant="contained">Shop Now</Button>
                                </Box>
                                <Box sx={{ width: '50%' }}>
                                    <img src={step.imgPath} alt="" style={{ width: '100%' }} />
                                </Box>
                            </Box>
                        ) : null}
                    </div>
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

    )
}


export default Banner;