import React from 'react';

const Modal = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>상품이 장바구니에 담겼습니다.</h2>
        <button onClick={close}>쇼핑 계속하기</button>
        <button onClick={() => window.location.href="/cart"}>장바구니로 이동</button>
      </div>
    </div>
  );
}

export default Modal;

