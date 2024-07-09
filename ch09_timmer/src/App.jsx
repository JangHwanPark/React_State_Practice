import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from "./Timer.jsx";
import StartButton from "./StartButton.jsx";
import ClearButton from "./ClearButton.jsx";

function App() {
  const [time, setTime] = useState(0);
  const [timeLog, setTimeLog] = useState([]);
  const [click, setClick] = useState(false);
  const [date, setDate] = useState(new Date);
  console.log(timeLog)

  const handleClick = () => setClick(!click);
  const handleClickClear = (time) => {
    setTime(0)
  }

  return (
    <div>
      <Timer
        click={click}
        time={time}
        setTime={setTime}
        setTimeLog={setTimeLog}
      />

      <div>
        <StartButton click={click} onClick={handleClick}/>
        <ClearButton onClick={handleClickClear}/>
      </div>

      <div>
        <h2>실행 로그</h2>
        {timeLog.map((item, index) => (
          <div key={index}>{date.toString()} - {item} 초 실행</div>
        ))}
      </div>
    </div>
  )
}

export default App