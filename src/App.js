import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import AddProduct from './Pages/adminPages/AddProduct/AddProduct';
import AdminDashboard from './Pages/adminPages/AdminDashboard/AdminDashboard';
import AdminRoute from './Pages/adminPages/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/adminPages/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/adminPages/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './Pages/adminPages/ManageAllProducts/ManageAllProducts';
import AboutUs from './Pages/sharedPages/AboutUs/AboutUs';
import ContactUs from './Pages/sharedPages/ContactUs/ContactUs';
import Footer from './Pages/sharedPages/Home/Footer/Footer';
import Header from './Pages/sharedPages/Home/Header/Header';
import Home from './Pages/sharedPages/Home/Home';
import Login from './Pages/sharedPages/Login/Login';
import NotFound from './Pages/sharedPages/NotFound/NotFound';
import SingleProductDetail from './Pages/sharedPages/Products/Product/SingleProductDetail/SingleProductDetail';
import Products from './Pages/sharedPages/Products/Products';
import Register from './Pages/sharedPages/Register/Register';
import AddReview from './Pages/userPages/AddReview/AddReview';
import MyOrders from './Pages/userPages/MyOrders/MyOrders';
import Pay from './Pages/userPages/Pay/Pay';
import UserDashboard from './Pages/userPages/UserDashboard/UserDashboard';
import UserRoute from './Pages/userPages/UserRoute/UserRoute';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<SingleProductDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          {/* user routes */}
          <Route
            path="user"
            element={
              <UserRoute>
                <UserDashboard />
              </UserRoute>
            }
          >
            <Route path="addReview" element={<AddReview />} />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="pay" element={<Pay />} />
          </Route>

          {/* admin routes */}
          <Route
            path="admin"
            element={
              <AdminRoute>
                <AdminDashboard />{' '}
              </AdminRoute>
            }
          >
            <Route path="addProduct" element={<AddProduct />} />
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageAllOrders" element={<ManageAllOrders />} />
            <Route path="manageAllProducts" element={<ManageAllProducts />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
