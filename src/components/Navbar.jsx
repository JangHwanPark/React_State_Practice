import React from 'react';
import styles from './Navbar.module.css';
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/">Home</Link>
            <Link to="/comment">Comment</Link>
            <Link to="/state">UseStatePage</Link>
        </nav>
    );
}