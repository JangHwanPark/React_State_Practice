import React, {useEffect} from 'react';
import LikeButton from "../LikeButton/LikeButton";
import {Link} from "react-router-dom";
import { marked } from 'marked';

export default function PostsList() {
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        // 마크다운 파일 목록 가져옴
        const markdownFile = require.context('../../posts', true, /\.md$/);

        Promise.all(
            markdownFile.keys().map(file => {
                const markdown = markdownFile(file);

                return fetch(markdown)
                    .then(res => res.text())
                    .then((text) => ({
                        slug: file.replace('./', '').replace('.md', ''),
                        title: text.split('\n')[0].replace('# ', ''), // 첫 번째 줄이 제목
                        content: marked(text),
                    }));
            })
        ).then((posts) => setPosts(posts));
    }, []);

    return (
        <>
            {posts.map((post) => (
                <article className="p-4 shadow-lg col-span-3" key={post.slug}>
                    <h2 className="font-semibold text-xl mb-2">
                        <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p>{post.content}</p>
                    <LikeButton/>
                </article>
            ))}
        </>
    );
}