import React from 'react';
import ShoppingBasketLayout from "../../layout/ShoppingBasketLayout";
import BasketSection from "../components/BasketSection";

export default function ShoppingBasket() {
    return (
        <ShoppingBasketLayout>
            <BasketSection sectionTitle={'장바구니'}/>
            <BasketSection sectionTitle={'주문금액'}/>
        </ShoppingBasketLayout>
    );
}