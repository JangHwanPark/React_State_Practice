import React from 'react';
import LikeButton from "../LikeButton/LikeButton";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import UseFetchPost from "../../hooks/useFetchPost";

export default function PostsList() {
    UseFetchPost();
    const { filteredPosts } = useSelector((state) => state.posts);

    return (
        <>
            {filteredPosts.map((post) => (
                <article className="p-4 shadow-lg col-span-3" key={post.slug}>
                    <h2 className="font-semibold text-xl mb-2">
                        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: post.content}}/>
                    <LikeButton/>
                </article>
            ))}
        </>
    );
}