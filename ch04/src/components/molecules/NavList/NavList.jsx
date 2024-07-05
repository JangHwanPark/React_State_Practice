import React from 'react';
import {NavLink} from "react-router-dom";


export default function NavList() {
    return (
        <nav className={'shop-navbar'}>
            <ul className={'nav-list'}>
                <li className={'nav-item'}>
                    <NavLink to="/shop-basket">장바구니</NavLink>
                </li>
                {/* Other nav links */}
            </ul>
        </nav>
    );
}