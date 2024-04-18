import React from 'react';

export default function Header({children}) {
    return (
        <header className={'w-full'}>
            <div className='mg-15 flex'>
                {children}
            </div>
        </header>
    );
}