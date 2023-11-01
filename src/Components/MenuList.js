import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function MenuList({ kind, menus, addToCart, Images }) {

  return (
    <div>
      <h1>{kind.charAt(0).toUpperCase() + kind.slice(1)}</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu.id} className="menu-item">
            <img style={{width:100, height:100}}src={Images[menu.menu_name]} alt={menu.menu_name} className="menu-image" />
            <span className="menu-details">
              {menu.menu_name} - {menu.price}원
              <button onClick={() => addToCart(menu)}>
                <i className="fa fa-shopping-cart"></i> {/* font-awesome 아이콘 */}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
