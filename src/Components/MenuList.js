import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function MenuList({ kind, menus, addToCart, Images }) {
  const iconButtonStyle = {
    fontSize: 30,
    background: 'none', // 배경 색 제거
    border: 'none', // 테두리 제거
    padding: 0, // 패딩 제거
    cursor: 'pointer', // 마우스 오버 시 커서 변경
  };

  return (
    <div>
      <h1>{kind.charAt(0).toUpperCase() + kind.slice(1)}</h1>
      <ul style={{ listStyleType: 'none' }}>
        {menus.map((menu) => (
          <li key={menu.id} className="menu-item">
            <img style={{ width: 100, height: 100 }} src={Images[menu.menu_name]} alt={menu.menu_name} className="menu-image" />
            <div className="menu-details">
              {menu.menu_name} - {menu.price}원
              <button style={iconButtonStyle} onClick={() => addToCart(menu)}>
                <i alt="장바구니에 추가" className="fa fa-shopping-cart"></i> {/* font-awesome 아이콘 */}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
