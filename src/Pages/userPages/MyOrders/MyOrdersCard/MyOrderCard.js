import { Button, Card, CardMedia, Chip, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { BsClockFill } from 'react-icons/bs';
import { FaSkullCrossbones, FaTrashAlt } from 'react-icons/fa';
import CancelOrder from './CancelOrder/CancelOrder';

const MyOrderCard = () => {
    const cancelOrderButton = (
        <Button variant="danger" className="me-3">
            <span className="pe-2">Cancel</span>
            <FaSkullCrossbones />
        </Button>
    );
    const cancelOrderMessage = 'Are you sure? You want to cancel this order.';
    const deleteOrderButton = (
        <Button variant="warning" className="me-3">
            <FaTrashAlt />
        </Button>
    );
    const deleteOrderMessage = 'do you want to delete this';
    return (
        <Card
            style={{ maxWidth: '35rem' }}
            className="rounded-3 my-3 px-md-0 px-3 me-3"
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 2 }}>
                <Card.Text className="ms-3">
                    <BsClockFill />
                    <span className="ps-2" style={{ color: '#F50EBB' }}>
                        {"myOrder.order_time"}
                    </span>
                </Card.Text>
                <Box sx={{ textAlign: 'center' }}>
                    {"myOrder.status" === 'pending' ? (
                        <CancelOrder
                            id={"myOrder._id"}
                            // handleCancel={handleCancel}
                            cancelOrderButton={cancelOrderButton}
                            cancelOrderMessage={cancelOrderMessage}
                        />
                    ) : (
                        <CancelOrder
                            id={"myOrder._id"}
                            // handleCancel={handleCancel}
                            cancelOrderButton={deleteOrderButton}
                            cancelOrderMessage={deleteOrderMessage}
                        />
                    )}
                </Box>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm>
                        <Typography>

                        </Typography>
                        <Typography>
                            price: <span className="text-primary fw-bold">food name</span>
                        </Typography>
                        <Typography>
                            <Chip label="Chip Filled" bg={'myOrder.status' === 'pending' ? 'danger' : 'success'}>
                                {"myOrder.status"}
                            </Chip >
                        </Typography>
                        <Typography className="d-flex align-items-center"
                            style={{ fontSize: 11 }}>
                            <span className="pe-2">Order Id:</span>
                            <span>{'myOrder._id'}</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
};

export default MyOrderCard;


/* 


*/