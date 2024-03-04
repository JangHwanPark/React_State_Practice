import React from 'react';

export default function DefaultPropsPractice({ name, developed }) {
    return (
        <div>
            <h1>DefaultPropsPractice</h1>
            <p>이름 : {name}</p>
            <p>개발사 : {developed}</p>
        </div>
    );
}

DefaultPropsPractice.defaultProps = {
    name : 'Next.js',
    developed : 'Vercel'
}