import React from 'react';
import styles from './AppComment.module.css';
import CommentHeader from "../../components/Comment/CommentHeader/CommentHeader";
import CommentList from "../../components/Comment/CommentList/CommentList";

export default function Comment() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <CommentHeader/>
                <CommentList/>
            </div>
        </div>
    );
}