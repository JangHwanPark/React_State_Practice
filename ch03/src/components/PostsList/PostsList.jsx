import React from 'react';
import LikeButton from "../LikeButton/LikeButton";
import {Link} from "react-router-dom";

export default function PostsList() {
    return (
        <article className="p-4 shadow-lg col-span-3">
            <h2 className="font-semibold text-xl mb-2">
                <Link to={'/posts/1'}>주요 기사 제목</Link>
            </h2>
            <p>기사 내용...</p>
            <LikeButton/>
        </article>
    );
}