import { useState, useEffect } from 'react';

import Esspresso from '../img/CoffeeImg/에스프레소.jpg';
import Americano from '../img/CoffeeImg/아메리카노.jpg';
import Latte from '../img/CoffeeImg/카페라떼.jpg';
import CoffeeMoca from '../img/CoffeeImg/카페모카.jpg';
import VanilaLatte from '../img/CoffeeImg/바닐라라떼.jpg';
import CaramelMacchiato from '../img/CoffeeImg/카라멜마끼아또.jpg';
import HazelnutLatte from '../img/CoffeeImg/헤이즐넛라떼.jpg';
import Coldbrew from '../img/CoffeeImg/콜드브루.jpg';
import addShot from '../img/CoffeeImg/샷추가.png';
import ChocoSmoothie from '../img/SmoothieImg/초코스무디.jpg';
import GreenteaSmoothie from '../img/SmoothieImg/녹차스무디.jpg';
import PlainSmoothie from '../img/SmoothieImg/플레인스무디.jpg';
import StrawberrySmoothie from '../img/SmoothieImg/딸기요거트스무디.jpg';
import MangoSmoothie from '../img/SmoothieImg/망고요거트스무디.jpg';
import MilkShake from '../img/SmoothieImg/밀크셰이크.jpg';
import CoffeeShake from '../img/SmoothieImg/커피셰이크.jpg';

const Cart = ({ inCart: initialCart, removeFromCart }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const [inCart, setInCart] = useState(
    initialCart.map((item) => ({
      ...item,
      temperature: item.temperature || 'cold',
      quantity: item.quantity || 1,
    }))
  );
  // `inCart: initialCart`는 객체 구조 분해 할당을 사용하여
  // `inCart`라는 prop을 `initialCart`라는 새로운 이름의 변수로 받아옵니다.
  // 이를 통해 `inCart` prop은 이 함수 내에서 `initialCart`라는 이름으로 사용됩니다.

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...inCart];
    if (!updatedCart[index].quantity) updatedCart[index].quantity = 1;
    updatedCart[index].quantity += delta;
    if (updatedCart[index].quantity < 1) updatedCart[index].quantity = 1;
    setInCart(updatedCart);
  };

  const onDelete = (index) => {
    const updatedCart = [...inCart];
    updatedCart.splice(index, 1);
    setInCart(updatedCart);
  };

  const toggleTemperature = (index) => {
    const updatedCart = [...inCart];
    updatedCart[index].temperature = updatedCart[index].temperature === 'cold' ? 'hot' : 'cold';
    setInCart(updatedCart);
  };

  const totalPrice = inCart.reduce((acc, product) => acc + parseFloat(product.price) * (product.quantity || 1), 0);

  const handleOrder = () => {
    const cartData = {
      items: inCart,
      phoneNumber: phoneNumber,
    };
    console.log(JSON.stringify(cartData, null, 2));
    setInCart([]);
    setPhoneNumber('');
    alert('주문이 완료되었습니다.');
  };

  const ButtonStyle = {
    fontSize: '1rem', // Adjust the font size as necessary
    padding: '0.5em', // Provide some padding around the text
    margin: '0.5em',
    background: 'none',
    border: '1px solid #ccc', // Optional: add a border to make it look like a button
    cursor: 'pointer',
  };

  const menuImages = {
    에스프레소: Esspresso,
    아메리카노: Americano,
    카페라떼: Latte,
    카페모카: CoffeeMoca,
    바닐라라떼: VanilaLatte,
    카라멜마끼아또: CaramelMacchiato,
    헤이즐넛라떼: HazelnutLatte,
    '콜드브루(디카페인)': Coldbrew,
    샷추가: addShot,
    '초코 스무디': ChocoSmoothie,
    '녹차 스무디': GreenteaSmoothie,
    '플레인 요거트 스무디': PlainSmoothie,
    '딸기 요거트 스무디': StrawberrySmoothie,
    '망고 요거트 스무디': MangoSmoothie,
    '밀크 셰이크': MilkShake,
    '커피 셰이크': CoffeeShake,
    // ... 나머지 메뉴 이름과 이미지를 매핑
  };

  return (
    <div>
      <h1>장바구니</h1>
      <div style={{ margin: '0.3rem' }}>
        <label>
          <span>전화번호: </span>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)} // 사용자 입력에 따라 전화번호 업데이트
            placeholder="전화번호를 입력하세요"
          />
        </label>
      </div>

      {inCart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <div>
          {inCart.map((product, index) => (
            <div key={index}>
              <img src={menuImages[product.menu_name]} alt={product.menu_name} style={{ width: 100, height: 100 }} />
              <span>
                <h3>{product.menu_name}</h3>
                <span>
                  {product.price}원 [ {product.quantity || 1} ]
                </span>
                <span>
                  <button style={ButtonStyle} onClick={() => handleQuantityChange(index, 1)}>
                    +
                  </button>
                  <button style={ButtonStyle} onClick={() => handleQuantityChange(index, -1)}>
                    -
                  </button>
                </span>
                <span>
                  <button
                    style={{
                      ...ButtonStyle,
                      color: product.temperature === 'cold' ? 'blue' : 'red',
                    }}
                    onClick={() => toggleTemperature(index)}>
                    {product.temperature.toUpperCase()}
                  </button>
                </span>
              </span>
              <button style={ButtonStyle} onClick={() => onDelete(index)}>
                삭제
              </button>
            </div>
          ))}
          <h2>총 금액: {totalPrice}원</h2>
          <button style={ButtonStyle} onClick={handleOrder}>
            주문하기
          </button>{' '}
          {/* 주문하기 버튼 추가 */}
        </div>
      )}
    </div>
  );
};

export default Cart;
