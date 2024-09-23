import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppBar from './AppBar/AppBar'
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppBar />}>
        <Route index element={<HomePage/>} />
        <Route path='products' element={<div>Products</div>} />
        <Route path='onSale' element={<div>On Sale</div>} />
        <Route path='contactUs' element={<div>Contact Us</div>} />
        <Route path='logIn' element={<div>Log In</div>} />
      </Route>
    </Routes>
  );
};

export default App