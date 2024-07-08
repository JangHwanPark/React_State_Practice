import React, {useState} from 'react';

const CommentForm = ({setComments}) => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    const {value} = e.target;
    console.log(value);
    setComment(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments(prevComments => [...prevComments, comment])
  }

  return (
    <form onSubmit={handleSubmit} className='comment-form'>
      <input type="text" onChange={handleChange}/>
      <button>게시</button>
    </form>
  );
};

export default CommentForm;