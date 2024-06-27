import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {CiMenuBurger} from "react-icons/ci";

export default function GlobalNavigation() {
    const [clickBtn, setClickBtn] = useState(false);

    return (
        <nav className="glb">
            <div className="logo-wrapper">
                <h2 className="glb-logo">Logo</h2>
            </div>
            <ul className="glb-list">
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="hamburger"><CiMenuBurger/></li>
            </ul>
        </nav>
    );
}