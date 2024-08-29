import React from 'react';
import './App.css';

function ShoppingCart({ cart, showCart, toggleCart, removeFromCart }) {
  return (
    <>
      <div className="cart-icon-container">
        <button onClick={toggleCart} className="cart-icon">
          🛒 {cart.length}
        </button>
      </div>
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
    </>
  );
}

export default ShoppingCart;
