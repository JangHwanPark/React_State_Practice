import React from 'react';
import {RiCodeView} from "react-icons/ri";

export default function Title() {
    return (
        <div className={'flex justify-start items-center gap-2 title'}>
            <RiCodeView size={40}/>
            <h1 className={'text-4xl font-bold first-letter:uppercase'}>내 블로그임</h1>
        </div>
    );
}