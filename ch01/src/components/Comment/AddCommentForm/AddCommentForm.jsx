import React, {useState} from 'react';
import styles from './AddCommentForm.module.css';
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
        <form
            className={styles.form_comment}
            onSubmit={handleFormSubmit}
        >
            <div className={styles.input_row}>
                <input
                    className={styles.input_text}
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                />
            </div>
            <button className={styles.btn_submit}>등록</button>
        </form>
    );
};