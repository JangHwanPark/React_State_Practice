import React from 'react';

const ListItem = ({programming}) => {
  return (
    <ul>
      {programming.map((item, index) => (
        <li key={index}>
          <span>{item}</span>
          <button className="btn_update">수정</button>
          <button className="btn_delete">삭제</button>
        </li>
      ))}
    </ul>
  );
};

export default ListItem;