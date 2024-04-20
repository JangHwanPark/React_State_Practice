import React from 'react';
import {Link} from "react-router-dom";
import {FaGithub} from "react-icons/fa";
import {CiSearch} from "react-icons/ci";
import {GoMoon} from "react-icons/go";

export default function Header() {
    return (
        <header className="relative flex items-center h-12 font-semibold">
            <h1 className="mr-auto text-3xl font-bold">
                <Link to="/" className="px-2 hover:text-gray-300">Home</Link>
            </h1>
            <div className={'w-3/12 flex items-center justify-between'}>
                <nav className={'text-opacity-60 flex items-center gap-1 text-2xl md:text-base'}>
                    <Link to="/about" className="px-2 hover:text-gray-300">About</Link>
                    <Link to="/articles" className="px-2 hover:text-gray-300">Posts</Link>
                    <Link to="/contact" className="px-2 hover:text-gray-300">연락처</Link>
                </nav>
            </div>
            <div className={'text-opacity-60 flex items-center gap-1 text-2xl md:text-base'}>
                <span className="px-2 hover:text-gray-300"><FaGithub/></span>
                <span className="px-2 hover:text-gray-300"><CiSearch/></span>
                <span className="px-2 hover:text-gray-300"><GoMoon/>{/*<GoSun/>*/}</span>
            </div>
        </header>
    );
}