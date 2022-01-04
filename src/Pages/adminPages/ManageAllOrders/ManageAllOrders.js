import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cancelOrder,
  fetchAllOrders,
  updateOrderStatus,
} from '../../../redux/slices/order/orderSlice';
import OrderTableRow from './OrderTableRow/OrderTableRow';

const ManageAllOrders = () => {
  const orders = useSelector((state) => state.orders.allOrders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);

  if (orders.length === 0) {
    return (
      <Box
        sx={{
          minHeight: 'calc(100vh - 220px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5">No users have ordered yet.</Typography>
      </Box>
    );
  }

  const handleOrderShipping = (id) => {
    dispatch(updateOrderStatus(id)).then(() => {
      dispatch(fetchAllOrders());
    });
  };

  const handleRejectOrder = (id) => {
    dispatch(cancelOrder(id)).then(() => {
      dispatch(fetchAllOrders());
    });
  };

  return (
    <Box sx={{ mt: 3, minHeight: 'calc(100vh - 220px)' }}>
      <TableContainer component={Paper} sx={{ px: { xs: 2, md: 15 } }}>
        <Table
          sx={{
            minWidth: 650,
            border: `1px solid ${pink[600]}`,
            borderRadius: 10,
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                Customer
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                OrderInfo
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Status
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Ship Order
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <OrderTableRow
                key={order._id}
                order={order}
                handleRejectOrder={handleRejectOrder}
                handleOrderShipping={handleOrderShipping}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageAllOrders;
