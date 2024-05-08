import './index.css';
import {Link, Outlet} from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <nav className={'h-10 mb-5 col-span-12'}>
                <ul className={'h-full flex justify-center items-center gap-3'}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/posts/1'}>PostDetails</Link></li>
                    <li><Link to={'/accordion'}>아코디언 UI</Link></li>
                    <li><Link to={'/button/toggle'}>토글 이벤트 UI</Link></li>
                    <li><Link to={'/c/01'}>캐러셀 UI</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

export default App;