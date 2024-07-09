import React from 'react';

const ClearButton = ({onClick}) => {
  return (
    <>
      <button onClick={onClick}>초기화</button>
    </>
  );
};

export default ClearButton;