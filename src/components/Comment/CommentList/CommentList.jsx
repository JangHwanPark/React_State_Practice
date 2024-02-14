import React, {useState} from 'react';
import AddCommentForm from "../AddCommentForm/AddCommentForm";
import AddedCommentItem from "../AddedCommentItem/AddedCommentItem";

export default function CommentList() {
    const [comments, setComments] = useState([]);

    const handleCommentAdd = (comment) => {
        setComments([...comments, comment]);
        console.log(comments);
    }

    return (
        <section>
            <AddCommentForm onCommentAdd={handleCommentAdd}/>
            <ul>
                {comments.map((currentValue, idx) => (
                    <AddedCommentItem key={idx} currentValue={currentValue}/>
                ))}
            </ul>
        </section>
    );
}