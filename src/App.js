import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../../real_project/devmemflash/src/pages/Home/Home';
import Pricing from '../../../real_project/devmemflash/src/pages/Pricing/Pricing';
import Footer from '../../../real_project/devmemflash/src/pages/shared/Footer/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './Pages/sharedPages/Home/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
