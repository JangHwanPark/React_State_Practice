import React from 'react';

export default function GridLayout({children}) {
    return (
        <div className="h-full flex-grow grid grid-cols-4 gap-4 p-4 sm:px-6 lg:px-8">
            {children}
        </div>
    );
}