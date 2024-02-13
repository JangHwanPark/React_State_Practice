import React from 'react';
import AddComment from "../AddComment/AddComment";

export default function CommentList(props) {
    return (
        <section>
            {/* 코멘트 추가 */}
            <AddComment/>
            <ul>
                <li>
                    <p>1. HTML</p>
                    <button>답글</button>
                    <button>수정</button>
                    <button>삭제</button>
                </li>
            </ul>
        </section>
    );
}