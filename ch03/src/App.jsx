import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Categorise from "./components/Categorise/Categorise";
import {RiCodeView} from "react-icons/ri";
import Title from "./components/Title/Title";

function App() {
    return (
        <main className="h-full px-5 antialiased grid gap-12 mt-4 overflow-hidden sm:mx-auto sm:max-w-2xl sm:px-8 md:max-w-6xl md:overflow-visible lg:px-0">
            <Header/>
            <Title/>
            <Categorise/>
            <Outlet/>
            <Footer/>
        </main>
    );
}

export default App;