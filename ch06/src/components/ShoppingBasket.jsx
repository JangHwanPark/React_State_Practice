import React from 'react';
import Products from "./Products.jsx";

const ShoppingBasket = ({product, handleClickUpdateCnt}) => {
  const handleAdd = (item) => handleClickUpdateCnt(item.name, 1);
  const handleRemove = (item) => handleClickUpdateCnt(item.name, -1);

  return (
    <div>
      <h2>Shopping Basket</h2>
      <Products
        data={product}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        showCount={true}
      />
      {product.length === 0 && <div>장바구니가 비었습니다.</div>}
    </div>
  );
};

export default ShoppingBasket;