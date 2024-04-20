import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { marked } from 'marked';
import {sanitizeHtml} from "../utils/sanitizeHtml";

function PostDetail() {
    const { slug } = useParams(); // URL로부터 슬러그를 가져옴
    const [post, setPost] = useState(null);
    console.log(post)

    useEffect(() => {
        if (slug) {
            fetch(`/posts/${slug}.md`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(text => {
                    const titleMatch = text.match(/^#\s*(.+)/);
                    const title = titleMatch ? titleMatch[1] : "No title";
                    const content = marked(text);
                    setPost({
                        slug,
                        title,
                        content: sanitizeHtml(content),
                    });
                })
                .catch(e => {
                    console.error("Fetching markdown failed", e);
                    setPost({
                        slug,
                        title: "Error",
                        content: "<p>Error loading post. Please try again later.</p>",
                    });
                });
        }
    }, [slug]);

    // 포스트 없을경우 로딩바 출력
    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <article>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            {/* 다른 포스트 관련 내용을 여기에 추가 */}
        </article>
    );
}

export default PostDetail;