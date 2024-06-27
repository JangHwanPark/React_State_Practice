import React from 'react';
import ButtonGroup from "../common/ButtonGroup.tsx";
import GlobalNavigation from "../common/GlobalNavigation.tsx";

export default function Home() {
    return (
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <GlobalNavigation/>
        </div>
    );
}