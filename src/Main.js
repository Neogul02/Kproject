import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import { Home } from './Components/Home.js';

function Main() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <header>
        {/* Your navigation buttons */}
        <div className="title">
          <h1>BLOOMSBURRY</h1>
        </div>
        <nav className="btnGroup">
          <ul>
            <li>
              <button onClick={() => setActiveSection('home')} className="headerBtn">
                HOME
              </button>
            </li>
            <li>
              <button onClick={() => setActiveSection('menu')} className="headerBtn">
                MENU
              </button>
            </li>
            <li>
              <button onClick={() => setActiveSection('nonCoffee')} className="headerBtn">
                NON-COFFEE
              </button>
            </li>
            <li>
              <button onClick={() => setActiveSection('bakery')} className="headerBtn">
                BAKERY
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        {/* Your content sections */}
        <div id="pageMain">
          <div id="home" style={{ display: activeSection === 'home' ? 'block' : 'none' }}>
            <Home />
            {/* Home section content */}
          </div>
          <div id="menu" style={{ display: activeSection === 'menu' ? 'block' : 'none' }}>
            {/* Menu section content */}
          </div>
          <div id="nonCoffee" style={{ display: activeSection === 'nonCoffee' ? 'block' : 'none' }}>
            {/* Non-Coffee section content */}
          </div>
          <div id="bakery" style={{ display: activeSection === 'bakery' ? 'block' : 'none' }}>
            {/* Bakery section content */}
          </div>
        </div>
      </body>
    </div>
  );
}

export default Main;
