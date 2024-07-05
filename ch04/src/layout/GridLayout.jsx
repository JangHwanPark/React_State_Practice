import React from 'react';
import Navbar from "../components/organisms/Navbar/Navbar";

export default function GridLayout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}