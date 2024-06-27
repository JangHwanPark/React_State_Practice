import React from 'react';
import Select from "../common/Select.tsx";

export default function Home() {
    return (
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Select/>
        </div>
    );
}