import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Coffee from './Components/Coffee.js';
import Cart from './Components/Cart.js';

import './App.css';

export default function App() {
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
          <li className="CartLink"></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route index element={<Home />} />
        
        <Route path="/coffee" element={<Coffee />} />
      </Routes>
    </BrowserRouter>
  );
}
