import React from 'react';
import styles from './UseStatePage.module.css';
import UseStateBasic from "../components/UseStatePractice/UseStateBasic";
import UseStatePrev from "../components/UseStatePractice/UseStatePrev";

export default function UseStatePage() {
    return (
        <main className={styles.container}>
            <h1>UseStatePage</h1><br/>
            <UseStateBasic/>
            <UseStatePrev/>
        </main>
    );
}