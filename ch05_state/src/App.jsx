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
                </ul>
            </nav>
            <Outlet/>
        </>
    );
}

export default App;