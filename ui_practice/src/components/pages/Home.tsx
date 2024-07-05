import React from 'react';
import AppleMacAnime from "./AppleMacAnime.tsx";
import TabButtonUI from "../common/TabButtonUI.tsx";

export default function Home() {
    return (
        <div className="container" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TabButtonUI/>
        </div>
    );
}