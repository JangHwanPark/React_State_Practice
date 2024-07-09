import React from 'react';

const StartButton = ({click, onClick}) => {
  return (
    <>
      <button onClick={onClick}>
        타이머 {click ? '종료' : '시작'}
      </button>
    </>
  );
};

export default StartButton;