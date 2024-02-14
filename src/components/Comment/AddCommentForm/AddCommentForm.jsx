import React, {useState} from 'react';

export default function AddCommentForm({ onCommentAdd }) {
    const [text, setText] = useState('');

    const handleInputChange = (e) => {
        setText(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onCommentAdd({text});
        setText('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={text} onChange={handleInputChange}/>
            <button>등록</button>
        </form>
    );
};