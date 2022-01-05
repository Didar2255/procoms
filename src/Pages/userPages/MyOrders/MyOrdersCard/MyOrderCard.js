import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../../../redux/slices/product/productSlice';
import CancelOrderModal from './CancelOrderModal/CancelOrderModal';

const MyOrderCard = ({ myOrder, handleCancelOrder }) => {
  const product = useSelector((state) => state.products.singleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(myOrder.product_id));
  }, [myOrder.product_id]);

  const cancelOrderButton = (
    <IconButton>
      <MdDeleteForever color="red" fontSize={30} />
    </IconButton>
  );

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 450, mx: 'auto' }}>
        <CardHeader
          action={
            <CancelOrderModal
              id={myOrder._id}
              handleCancelOrder={handleCancelOrder}
              cancelOrderButton={cancelOrderButton}
              cancelOrderMessage="Do you want to cancel this order"
            />
          }
          subheader={`Ordered on ${myOrder.order_time}`}
        />

        <CardMedia
          component="img"
          sx={{ maxHeight: 300 }}
          image={product.image}
          alt={product.name}
        />
        <CardContent
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" color="primary">
            ${myOrder.price}
          </Typography>

          <Typography variant="subtitle2">{product.name}</Typography>

          {myOrder.status === 'pending' ? (
            <Chip label={myOrder.status} color="warning" variant="outlined" />
          ) : (
            <Chip label={myOrder.status} color="success" variant="outlined" />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};
export default MyOrderCard;
