import { useState } from 'react';

const Cart = ({ inCart, removeFromCart }) => {
  const totalPrice = inCart.reduce((acc, product) => acc + parseFloat(product.price), 0);

  const handleRemove = (index) => {
    const newCart = [...inCart];
    newCart.splice(index, 1);
    removeFromCart(newCart);
  };

  return (
    <div>
      <h1>장바구니</h1>

      {inCart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <div>
          {inCart.map((product, index) => (
            <div key={index}>
              <div>
                <h3>{product.menu_name}</h3>
                <h4>{product.price}원</h4>
              </div>
              <button onClick={() => handleRemove(index)}>삭제</button>
            </div>
          ))}
          <h2>총 금액: {totalPrice}원</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
