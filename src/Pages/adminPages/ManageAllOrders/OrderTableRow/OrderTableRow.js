import { Avatar, Chip, TableCell, TableRow, Typography } from '@mui/material';
import { useEffect } from 'react';
import { MdCheckCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../../../../redux/slices/product/productSlice';
import RejectOrder from './RejectOrder/RejectOrder';
import ShipOrder from './ShipOrder/ShipOrder';

const OrderTableRow = ({ order, handleOrderShipping, handleRejectOrder }) => {
  const product = useSelector((state) => state.products.singleProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleProduct(order.product_id));
  }, [order.product_id]);

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell>
        <Avatar
          alt={product?.name}
          src={product?.image}
          sx={{ width: 56, height: 56 }}
        />
        <Typography
          variant="h6"
          sx={{ color: 'info.main', fontWeight: 'bold' }}
        >
          ${product?.price}
        </Typography>
      </TableCell>

      <TableCell align="right">
        <div>{order.name}</div>
        <div>{order.email}</div>
      </TableCell>

      <TableCell align="right">
        {order.status === 'pending' ? (
          <Chip label={order.status} color="warning" variant="outlined" />
        ) : (
          <Chip label="shipped" color="success" variant="outlined" />
        )}
      </TableCell>

      {/* popup for shipping an order */}
      <TableCell align="right">
        {order.status === 'pending' ? (
          <ShipOrder id={order._id} handleOrderShipping={handleOrderShipping} />
        ) : (
          <MdCheckCircleOutline color="green" fontSize={30} />
        )}
      </TableCell>

      <TableCell align="right">
        {/* popup for deleting an order */}
        <RejectOrder id={order._id} handleRejectOrder={handleRejectOrder} />
      </TableCell>
    </TableRow>
  );
};

export default OrderTableRow;
