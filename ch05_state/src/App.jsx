import logo from './logo.svg';
import './App.css';
import {Link, Outlet} from "react-router-dom";
import React from "react";

function App() {
    return (
        <>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/posts/1'}>PostDetails</Link></li>
          </ul>
          <Outlet/>
        </>
    );
}

export default App;