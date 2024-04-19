import React from 'react';
import {Link} from "react-router-dom";

export default function Header({children}) {
    return (
        <header className={'w-full mb-10 h-28'}>
            <div className={'w-64 flex items-center justify-between'}>
                <h1 className={'text-2xl'}><Link to={'/'}>Home</Link></h1>
                <h1 className={'text-2xl'}><Link to={'/components'}>Components</Link></h1>
                <h1 className={'text-2xl'}><Link to={'/products'}>Products</Link></h1>
            </div>
            <div className='w-full h-full flex items-center'>
                {children}
            </div>
        </header>
    );
}