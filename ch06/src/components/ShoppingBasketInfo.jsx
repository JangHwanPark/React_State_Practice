import React from 'react';

const ShoppingBasketInfo = ({ product, totalPrice }) => {
  return (
    <form>
      <h3>결제 금액</h3>
      <p>{totalPrice} 원</p>
      <div>
        <button>구매하기</button>
      </div>
    </form>
  );
};

export default ShoppingBasketInfo;