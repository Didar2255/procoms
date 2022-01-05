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
  deleteProducts,
  fetchProducts,
  removeFromProduct,
} from '../../../redux/slices/product/productSlice';
import Chart from '../../userPages/UserDashboard/Chart/Chart';
import ProductTableRow from './ProductTableRow/ProductTableRow';

const ManageAllProducts = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //if no products available
  if (products.length === 0) {
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
        <Typography variant="h5">
          You have no product in your website. Add products in your website
        </Typography>
      </Box>
    );
  }

  const handleDeleteProduct = (id) => {
    dispatch(deleteProducts(id)).then(() => {
      dispatch(removeFromProduct(id));
    });
  };

  return (
    <Box sx={{ mt: 3, minHeight: 'calc(100vh - 220px)' }}>
      <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: 600 }}>
        Product Chart
      </Typography>
      <Chart></Chart>
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
              <TableCell
                align="left"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                Product name
              </TableCell>
              <TableCell
                align="left"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                image
              </TableCell>
              <TableCell
                align="right"
                sx={{ color: 'primary.main', fontWeight: 'bold' }}
              >
                price
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
            {products.map((product) => (
              <ProductTableRow
                key={product._id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageAllProducts;
