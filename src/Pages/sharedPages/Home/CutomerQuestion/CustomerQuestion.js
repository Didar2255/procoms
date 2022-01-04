import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import pic1 from '../../../../assets/procoms.png'
import { MdExpandMore } from 'react-icons/md';

const CustomerQuestion = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1, backgroundColor: '#D1F2EB ', p: 5, borderRadius: '5px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant='h5' sx={{ fontWeight: 600, mb: 5 }}>
                            Frequently Ask Question
                        </Typography>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>1. How can I apply promo code to order offer product?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    If a discount or coupon code is offered on the site, allow users to automatically apply it by clicking on it.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>2. What are the best selling product?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Our all products are unique and very demanding.But Laptop and Mobile phone are the best selling product in out website.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel3a-content"
                                id="panel3a-header"
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>3. What are the return policy ?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    <li>The Product was purchased in the last 3 days</li>
                                    <li>
                                        The Product is in its original packaging and no seal is broken.
                                    </li>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box>
                            <img src={pic1} alt="" style={{ width: "500px", borderRadius: '5px' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CustomerQuestion;