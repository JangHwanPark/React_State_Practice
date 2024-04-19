import React from 'react';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center sm:px-6 lg:px-8">
            <h1 className="text-lg font-bold">블로그 타이틀</h1>
            <nav>
                <Link to="/" className="px-2 hover:text-gray-300">Home</Link>
                <Link to="/about" className="px-2 hover:text-gray-300">About</Link>
                <Link to="/articles" className="px-2 hover:text-gray-300">Posts</Link>
                <Link to="/contact" className="px-2 hover:text-gray-300">연락처</Link>
            </nav>
        </header>
    );
}