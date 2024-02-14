import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddCommentForm({ onCommentAdd }) {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length === 0) {
            alert('글자를 입력하세요.');
            return;
        }

        onCommentAdd({ id: uuidv4(), text });
        setText('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                value={text}
                onChange={handleInputChange}
            />
            <button>등록</button>
        </form>
    );
};