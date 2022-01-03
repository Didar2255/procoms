import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Slider from "react-slick";

const SpacialProduct = () => {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
        <Box sx={{ my: 10 }}>
            <Box>
                <Typography>
                    Spacial Product
                </Typography>
            </Box>
            <Slider {...settings}>
                <Box>
                    <Typography>
                        1
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        2
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        3
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        4
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        5
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        6
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        7
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        8
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        9
                    </Typography>
                </Box>
            </Slider>
        </Box>
    );
};

export default SpacialProduct;