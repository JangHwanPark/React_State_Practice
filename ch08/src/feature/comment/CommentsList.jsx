import React from 'react';

const CommentsList = ({comments}) => {
  console.log(comments)
  return (
    <ul className='comment-list'>
      {comments && comments.length !== 0
        ? comments.map((item, index) => (
          <li key={index} className='comment-item'>{item}</li>
        ))
        : <li className='comment-item'>게시글이 존재하지 않아용</li>
      }
    </ul>
  );
};

export default CommentsList;