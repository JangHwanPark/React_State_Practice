import React from 'react';

export default function AddedCommentItem ({ currentValue, onCommentDelete }) {
    const { text } = currentValue;

    const handleCommendDelete = () => {
        onCommentDelete(currentValue);
    }

    return (
        <li>
            <p>{text}</p>
            <button>답글</button>
            <button>수정</button>
            <button onClick={handleCommendDelete}>삭제</button>
        </li>
    );
};