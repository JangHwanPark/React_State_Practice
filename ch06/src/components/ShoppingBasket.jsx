import React, {useCallback, useEffect, useState} from 'react';
import Products from "./Products.jsx";
import ShoppingBasketInfo from "./ShoppingBasketInfo.jsx";

const ShoppingBasket = ({product, setProduct}) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClickUpdateCnt = useCallback((name, delta) => {
    setProduct(prevProduct =>
      prevProduct.map(productItem =>
        productItem.name === name
          ? { ...productItem, count: Math.max(productItem.count + delta, 1) }
          : productItem
      )
    );
  }, [setProduct]);

  const handleAdd = useCallback((name, price) => {
    handleClickUpdateCnt(name, 1)
    setTotalPrice(prevPrice => prevPrice + price)
  }, [handleClickUpdateCnt]);

  const handleRemove = useCallback((name, price) => {
    handleClickUpdateCnt(name, -1)
    setTotalPrice(prevPrice => prevPrice - price)
  }, [handleClickUpdateCnt]);

  useEffect(() => {
    const initialTotalPrice = product.reduce((total, item) => {
      return total + (item.price * item.count);
    }, 0)

    setTotalPrice(initialTotalPrice)
  }, [product])

  // console.log('ShoppingBasket: ' + JSON.stringify(product))
  console.log(totalPrice)
  return (
    <div>
      <h3>장바구니</h3>
      <Products
        data={product}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
        showCount={true}
      />

      {product.length === 0 && <div>장바구니가 비었습니다.</div>}

      {/* 장바구니 정보(결제해야할 정보)  */}
      <ShoppingBasketInfo product={product} totalPrice={totalPrice}/>
    </div>
  );
};

export default ShoppingBasket;