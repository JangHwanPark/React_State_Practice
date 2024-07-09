import React, {useEffect, useState} from 'react';

const Timer = ({click, time, setTime, setTimeLog}) => {
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (click) {
      const timerId = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
      setTimer(timerId);
    } else {
      clearInterval(timer)
      setTimer(null)
      setTimeLog(prevLog => [...prevLog, time])
    }

    return () => {
      clearInterval(timer)
    }
  }, [click])

  return (
    <div>
      <div>{time} 초</div>
    </div>
  );
};

export default Timer;