import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MenuList({ kind, addToCart }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const apiURL = 'http://localhost:8080/kproject_api/get_menu.php';

    axios.get(apiURL)
      .then(response => {
        const filteredMenus = response.data.filter(menu => menu.kind === kind);
        setMenus(filteredMenus);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [kind]);

  return (
    <div>
      <h1>{kind.charAt(0).toUpperCase() + kind.slice(1)}</h1>
      <ul>
        {menus.map(menu => (
          <li key={menu.id}>
            {menu.menu_name} - {menu.price}원
            <button onClick={() => addToCart(menu)}>장바구니에 추가</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
