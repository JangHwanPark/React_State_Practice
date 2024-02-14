import React from 'react';

export default function AddedCommentItem ({ currentValue }) {
    const { text } = currentValue;

    return (
        <li>
            <p>{text}</p>
            <button>답글</button>
            <button>수정</button>
            <button>삭제</button>
        </li>
    );
};