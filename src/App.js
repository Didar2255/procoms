import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Pages/adminPages/AdminDashboard/AdminDashboard';
import AboutUs from './Pages/sharedPages/AboutUs/AboutUs';
import ContactUs from './Pages/sharedPages/ContactUs/ContactUs';
import Footer from './Pages/sharedPages/Home/Footer/Footer';
import Header from './Pages/sharedPages/Home/Header/Header';
import Home from './Pages/sharedPages/Home/Home';
import Products from './Pages/sharedPages/Products/Products';
import UserDashboard from './Pages/userPages/UserDashboard/UserDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        {/* this routes will be private and nested */}
        <Route path="/userdashboard" element={<UserDashboard />}></Route>
        <Route path="/admindashboard" element={<AdminDashboard />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
