import React, {useEffect, useState} from 'react';

const MouseEvent = () => {
  const [downAndUp, setDownAndUp] = useState({ left: 100, top: 100});
  const [isDrag, setIsDrag] = useState(false);

  const handleMouseDown  = e => {
    setIsDrag(true)
  }

  const handleMouseMove = e => {
    if (isDrag) {
      // e.clientN - n : 클릭시 마우스 커서가 이동하는 좌표
      const mouseX = e.clientX - 200;
      const mouseY = e.clientY - 200;

      // 이동한 좌표로 포지션 설정
      setDownAndUp({ left: mouseX, top: mouseY });
    }
  }

  const handleMouseUp = () => {
    setIsDrag(false)
  }

  useEffect(() => {
    if (isDrag) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    // 리스너 삭제
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDrag]);

  return (
    <div>
      <div
        className="circle"
        style={{left: downAndUp.left, top: downAndUp.top}}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default MouseEvent;