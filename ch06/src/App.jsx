import React, {useCallback, useState} from 'react'
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

  const handleClickAddBasket = useCallback((item) => {
    setProduct(prevProduct => {
      const findProduct = prevProduct.find(productItem => {
        return productItem.name === item.name
      });

      if (findProduct) {
        return prevProduct.map(productItem =>
          productItem.name === item.name
            ? { ...productItem, count: productItem.count + 1 }
            : productItem
        );
      } else {
        return [...prevProduct, item];
      }
    });
  }, []);

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
      <ShoppingBasket
        product={product}
        setProduct={setProduct}
      />
    </main>
  )
}

export default App