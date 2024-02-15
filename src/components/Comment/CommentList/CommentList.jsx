import React, {useState} from 'react';
import styles from './CommentList.module.css';
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import AddedCommentItem from "../AddedCommentItem/AddedCommentItem";

export default function CommentList() {
    const [comments, setComments] = useState([]);

    const handleCommentAdd = (comment) => {
        setComments([...comments, comment]);
    }

    const handleCommendDelete = (deleted) => {
        console.log(deleted)
        setComments(comments.filter(t => t.id !== deleted.id));
    }

    return (
        <section className={styles.comment_section}>
            <AddCommentForm onCommentAdd={handleCommentAdd}/>
            <ul className={styles.comment_list}>
                {comments.map((currentValue) => (
                    <AddedCommentItem
                        key={currentValue.id}
                        currentValue={currentValue}
                        onCommentDelete={handleCommendDelete}
                    />
                ))}
            </ul>
        </section>
    );
}