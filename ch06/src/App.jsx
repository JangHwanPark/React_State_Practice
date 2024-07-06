import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from "./components/Products.jsx";
import {useQuery} from "@tanstack/react-query";

function App() {
  const {
    data,
    isLoading,
    error
  } = useQuery({
    queryKey: ["/exam-products.json"],
  });
  console.log(data)

  return (
    <main>
      {/* 상품 */}
      <Products/>

      {/* 장바구니 */}

      {/* 장바구니 정보(결제해야할 정보)  */}
    </main>
  )
}

export default App