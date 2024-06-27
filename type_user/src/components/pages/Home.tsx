import React from 'react';
import ButtonGroup from "../common/ButtonGroup.tsx";

export default function Home() {
    return (
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ButtonGroup title="하나"/>
        </div>
    );
}