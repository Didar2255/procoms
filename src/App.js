import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Pages/sharedPages/Home/Footer/Footer';
import Header from './Pages/sharedPages/Home/Header/Header';
import Home from './Pages/sharedPages/Home/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
