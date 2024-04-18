import React from 'react';

export default function Header({children}) {
    return (
        <header className={'w-full h-24'}>
            <div className='h-full flex items-center'>
                {children}
            </div>
        </header>
    );
}