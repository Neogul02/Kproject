import React from 'react';
import MenuList from './MenuList';

import Esspresso from '../img/CoffeeImg/Latte.jpg'
import Americano from '../img/CoffeeImg/Latte.jpg'

function Coffee({ menus, addToCart }) {

  // 예시로 각 메뉴 아이템에 해당하는 이미지 URL을 저장하는 객체
  const Images = {
    에스프레소: Esspresso,
    아메리카노: Americano,
    // ... 다른 커피 이미지들
  };

  return (
    <div>
      <h2>Coffee</h2>
      <MenuList kind="coffee" Images={Images} menus={menus} addToCart={addToCart} />
    </div>
  );
}

export default Coffee;
