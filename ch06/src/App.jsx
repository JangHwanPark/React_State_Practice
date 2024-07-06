import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from "./components/Products.jsx";
import {useQuery} from "@tanstack/react-query";
import ShoppingBasket from "./components/ShoppingBasket.jsx";

function App() {
  const {
    data,
    isLoading,
    error
  } = useQuery({
    queryKey: [`/${import.meta.env.VITE_KEY_PRODUCTS}`],
    select: data => data.map(product => ({ ...product, count: 1 }))
  });
  const [product, setProduct] = useState([])

  const handleClickAddBasket = (item) => {
    const findProduct = product.find(productItem => productItem.name === item.name);
    if (findProduct) {
      setProduct(prevProduct =>
        prevProduct.map(productItem =>
          productItem.name === item.name
            ? {...productItem, count: productItem.count + 1}
            : productItem
        )
      );
    } else {
      setProduct(prevProduct => [...prevProduct, item])
    }
  }

  const handleClickUpdateCnt = (name, delta) => {
    setProduct(prevProduct =>
      prevProduct.map(productItem =>
        productItem.name === name
          ? {...productItem, count: Math.max(productItem.count + delta, 1)}
          : productItem
      )
    )
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="container">
      {/* 상품 */}
      <Products
        data={data}
        handleClickAddBasket={handleClickAddBasket}
        showCount={false}
      />

      {/* 장바구니 */}
      <ShoppingBasket product={product} handleClickUpdateCnt={handleClickUpdateCnt}/>

      {/* 장바구니 정보(결제해야할 정보)  */}
    </main>
  )
}

export default App