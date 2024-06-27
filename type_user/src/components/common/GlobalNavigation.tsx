import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {CiMenuBurger} from "react-icons/ci";

export default function GlobalNavigation() {
    // 클릭값 상태 관리
    const [clickBtn, setClickBtn] = useState(false);

    // 클릭 상태 변경 함수
    const handleClick = () => {
        setClickBtn(!clickBtn)
        console.log(clickBtn)
    }

    return (
        <nav className="glb">
            <div className="logo-wrapper">
                <h2 className="glb-logo">Logo</h2>
                <div onClick={handleClick}><CiMenuBurger/></div>
            </div>
            {/* 상태를 활용한 클래스 변경 */}
            <ul className={`glb-list ${clickBtn ? 'glb-active' : ''}`}>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                <li className="glb-item"><Link to={"/"}>Menu</Link></li>
                {/*<li className="hamburger" onClick={handleClick}><CiMenuBurger/></li>*/}
            </ul>
        </nav>
    );
}