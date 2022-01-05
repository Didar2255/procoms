import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore } from 'react-icons/md';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import pic1 from '../../../../assets/procoms.png'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={< MdExpandMore />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const CustomerQuestion = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <Container>
            <Box sx={{ flexGrow: 1, backgroundColor: '#D1F2EB ', p: 5, borderRadius: '5px' }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography variant='h5' sx={{ fontWeight: 600, mb: 5 }}>
                            Frequently Ask Question
                        </Typography>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                <Typography sx={{ fontWeight: 'bold' }}>1. How can I apply promo code to order offer product?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    If a discount or coupon code is offered on the site, allow users to automatically apply it by clicking on it.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                                <Typography sx={{ fontWeight: 'bold' }}>2. What are the best selling product?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Our all products are unique and very demanding.But Laptop and Mobile phone are the best selling product in out website.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
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
                        <Box >
                            <img src={pic1} alt="" style={{ width: "100%", borderRadius: '5px' }} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    );
}

export default CustomerQuestion;