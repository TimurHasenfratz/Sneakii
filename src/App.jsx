// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Sneaker from './Sneaker';
import Navbar from './Navbar';
import Login from './Login';
import Contact from './Contact';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sneaker" element={<Sneaker />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
