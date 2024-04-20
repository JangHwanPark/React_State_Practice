import React from 'react';
import {Link} from "react-router-dom";

export default function Categorise() {
    return (
        <div className={'relative flex flex-wrap min-w-full gap-5'}>
            <Link to={'/'}>모두 보기</Link>
            <Link to={'/'}>Category1</Link>
            <Link to={'/'}>Category2</Link>
            <Link to={'/'}>Category3</Link>
            <Link to={'/'}>Category4</Link>
        </div>
    );
}