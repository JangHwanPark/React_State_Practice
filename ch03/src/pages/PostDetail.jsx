import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { sanitizeHtml } from "../utils/sanitizeHtml";

function PostDetail() {
    const { slug } = useParams();
    const post = useSelector(state =>
        state.posts.posts.find(p => p.slug === slug)
    );
    console.log(post, slug)

    useEffect(() => {
        if (!post) {
            console.error("Post not found");
        }
    }, [post]);

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <article>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }} />
        </article>
    );
}

export default PostDetail;