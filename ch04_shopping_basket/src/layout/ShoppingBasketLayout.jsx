import React from 'react';
import Logo from "../components/atoms/Logo";
import Divider from "../components/atoms/Divider";

export default function ShoppingBasketLayout({children}) {
    return (
        <div className={'container'}>
            <header className={'basket-header'}>
                <Logo/>
            </header>
            <Divider/>
            {/* main contents */}
            <div className={'contents'}>
                {children}
            </div>
        </div>
    );
}