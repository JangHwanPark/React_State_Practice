import React from 'react';
import ShoppingBasketLayout from "../../layout/ShoppingBasketLayout";
import BasketSection from "../components/BasketSection";
import Button from "../../components/atoms/Button";
import useFetch from "../../hooks/useFetch";

export default function ShoppingBasket() {
    // 첫번째 데이터 패칭 실패 : products = undefined
    const url = "https://janghwanpark.github.io/data-storage/json-data/product-data/shop-products.json";
    const {products} = useFetch(url);

    // 첫번째 데이터 패칭 실패 : products = undefined 문제 해결
    // 데이터가 아직 로드되지 않았을 때 로딩 표시
    if (!products) return <div>isNot Data</div>

    // 데이터가 로딩되면 출력
    console.log("products: ", products)

    return (
        <ShoppingBasketLayout>
            <BasketSection sectionTitle={<h2>장바구니</h2>} className={'shop-basket'}>
                <ul className={'products-header'}>
                    <li><h3>상품명</h3></li>
                    <li><h3>금액</h3></li>
                    <li><h3>재고</h3></li>
                    <li></li>
                </ul>
                {/* 상품 데이터 출력 */}
                {products.map(product => (
                    <ul key={product.PID} className={'products-list'}>
                        <li>{product.PName}</li>
                        <li>{product.Price}</li>
                        <li>{product.Stock}</li>
                        <li>삭제</li>
                    </ul>
                ))}
            </BasketSection>
            <BasketSection sectionTitle={<h2>주문 금액</h2>} className={'order-price'}>
                <div>상품 가격</div>
                <div>할인 금액</div>
                <div>배송비</div>
                <div>n 원</div>
                <Button btnName={'구매하기'}/>
            </BasketSection>
        </ShoppingBasketLayout>
    );
}