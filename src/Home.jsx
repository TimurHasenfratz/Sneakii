import React, { useState } from "react";
import Slider from './Slider';
import './App.css';
import { useCart } from './CartContext';
import ShoppingCart from './ShoppingCart';

function Home() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <main>
      <div className='text-3xl tracking-widest rajdhani-bold Home text-center text-slate-50 grid relative rounded-lg m-auto  justify-center items-center mt-20'>
        <div className=' my-20 z-10 backdrop-blur-lg w-full border-y-2 rounded-lg p-[2rem]'>
          <h1 className='z-10 m-auto text-7xl'>Sneakii</h1> <br />
          <h2 className='z-10'>Sneaker that fit your lifestyle</h2> <br />
          <p className='z-10'>Enjoy your shopping trip</p>
          <br />
        </div>
        <img src="SneakerBlue3.webp" alt="Header-Sneaker-Blue" loading='lazy' className='absolute w-full h-[25rem] m-auto object-cover'/>
        <br /><br />
      </div>
      <div className="cart-icon-container">
        <button onClick={toggleCart} className="cart-icon">
          🛒 {cart.length}
        </button>
      </div>
      <Slider addToCart={addToCart} />
      {showCart && (
        <div className="cart-container">
          <button className="cart-close-button" onClick={toggleCart}>✖</button>
          <h3 className="cart-header">Shopping Cart</h3>
          <ul className="cart-items">
            {cart.map((item, index) => (
              <li key={index}>
                {item.text} - {item.price} - {item.color} - {item.size}
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}

export default Home;
