import React from 'react';
import Navbar from "../components/organisms/Navbar/Navbar";
import GridLayout from "../layout/GridLayout";
import useFetch from "../hooks/useFetch";

export default function Home() {
    // 커스텀훅 호출
    const url = "https://janghwanpark.github.io/data-storage/json-data/product-data/shop-products.json";
    const {products} = useFetch(url);

    // 데이터 패칭 실패시 로딩 표시
    if (!products) return <div>Error</div>

    return (
        <GridLayout>
            {products.map(product => (
                <ul key={product.PID} className={'products-list'}>
                    <li>{product.PName}</li>
                    <li>{product.Price}</li>
                    <li>{product.Stock}</li>
                    <li>담기</li>
                </ul>
            ))}
        </GridLayout>
    );
}