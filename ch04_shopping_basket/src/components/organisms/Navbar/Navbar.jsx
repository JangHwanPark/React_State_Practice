import React from 'react';
import NavList from "../../molecules/NavList/NavList";
import Logo from "../../atoms/Logo";

export default function Navbar() {
    return (
        <header className={'shop-header'}>
            <Logo/>
            <NavList/>
            {/*<SearchBar/>*/}
        </header>
    );
}