import { React, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

import Coffee from './Components/Coffee.js';
import Smoothie from './Components/Smoothie.js';
import NonCoffee from './Components/NonCoffee.js';

import Cart from './Components/Cart.js';

import './App.css';

export default function App() {
  const [inCart, setInCart] = useState([]);

  const addToCart = (drink_product) => {
    setInCart([...inCart, drink_product]);
  };

  const removeFromCart = (updatedCart) => {
    setInCart(updatedCart);
  };

  return (
    <BrowserRouter>
      <div>
        <Link className="title" to="/">
          <div>BLOOMSBURRY</div>
        </Link>
        <div className="cartLink">
          <Link to="/cart">Cart</Link>
        </div>
      </div>
      <nav className="navBar">
        <ul>
          <li className="homeLink">
            <Link to="/">HOME</Link>
          </li>
          <li className="coffeeLink">
            <Link to="/coffee">COFFEE</Link>
          </li>
          <li className="SmoothieLink">
            <Link to="/Smoothie">SMOOTHIE</Link>
          </li>
          <li className="NONcoffeeLink">
            <Link to="/NONcoffee">NON-COFFEE</Link>
          </li>
          <li className="CartLink"></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/cart" element={<Cart inCart={inCart} removeFromCart={removeFromCart} />} />
        <Route index element={<Home />} />

        <Route path="/coffee" element={<Coffee addToCart={addToCart} />} />
        <Route path="/Smoothie" element={<Smoothie addToCart={addToCart} />} />
        <Route path="/NONcoffee" element={<NonCoffee addToCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}
