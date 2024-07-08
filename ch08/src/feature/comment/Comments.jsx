import React, {useState} from 'react';
import CommentsList from "./feature/comment/CommentsList.jsx";
import CommentForm from "./feature/comment/CommentForm.jsx";

const Comments = () => {

  const [comments, setComments] = useState([]);
  console.log("comments: " + comments)
  return (
    <div className='comment'>
      <h2 className='comment-title'>댓글창</h2>
      <CommentForm setComments={setComments}/>
      <CommentsList comments={comments}/>
    </div>
  );
};

export default Comments;