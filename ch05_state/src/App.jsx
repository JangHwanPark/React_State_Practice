import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
            <nav className={'grid-col-12'}>
                <ul className={'flex justify-center'}>
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