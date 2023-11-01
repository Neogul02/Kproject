import { useState, useEffect } from 'react';

const Cart = ({ inCart: initialCart, removeFromCart }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [quantities, setQuantities] = useState([]);
  const [temperatures, setTemperatures] = useState([]);

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

  return (
    <div>
      <h1>장바구니</h1>
      <div>
        <label>
          전화번호:
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
              <span>
                <h3>{product.menu_name}</h3>
                <span>
                  {product.price}원 - {product.quantity || 1}
                </span>
                <span>
                  <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                  <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                </span>
                <span>
                  <button onClick={() => toggleTemperature(index)}>{product.temperature.toUpperCase()}</button>
                </span>
              </span>
              <button onClick={() => onDelete(index)}>삭제</button>
            </div>
          ))}
          <h2>총 금액: {totalPrice}원</h2>
          <button onClick={handleOrder}>주문하기</button> {/* 주문하기 버튼 추가 */}
        </div>
      )}
    </div>
  );
};

export default Cart;
