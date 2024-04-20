import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
    return (
        <main className="h-full px-5 antialiased grid gap-12 mt-4 overflow-hidden sm:mx-auto sm:max-w-2xl sm:px-8 md:max-w-6xl md:overflow-visible lg:px-0">
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    );
}

export default App;