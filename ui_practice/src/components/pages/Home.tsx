import React from 'react';
import AppleMacAnime from "./AppleMacAnime.tsx";

export default function Home() {
    return (
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <AppleMacAnime/>
        </div>
    );
}