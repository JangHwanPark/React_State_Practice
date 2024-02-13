import React, {useState} from 'react';
import AddComment from "../AddComment/AddComment";
import CommentItem from "../CommentItem/CommentItem";

export default function CommentList(props) {
    const [comments, setComments] = useState([]);

    const handleCommentAdd = (comment) => {
        setComments([...comments, comment]);
        console.log(comments);
    }

    return (
        <section>
            {/* 코멘트 추가 */}
            <AddComment onCommentAdd={handleCommentAdd}/>
            <ul>
                <CommentItem/>
            </ul>
        </section>
    );
}