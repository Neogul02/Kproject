import React from 'react';
import MenuList from './MenuList';

function NonCoffee({ menus, addToCart }) {
  // 예시로 각 메뉴 아이템에 해당하는 이미지 URL을 저장하는 객체
  const Images = {
    에스프감자레소: './drinkImg/Americano.jpg',
    아메리카노: './drinkImg/Latte.jpg',
    // ... 다른 커피 이미지들
  };

  return (
    <div>
      <MenuList kind="NON-coffee" Images={Images} menus={menus} addToCart={addToCart} />
    </div>
  );
}

export default NonCoffee;
