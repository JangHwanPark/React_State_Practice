import {useEffect, useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const hardCalculate = number => {
  console.log("오래걸리는 작업 시작")
  for (let i = 0; i < 999999999; i++) {} // 생각중
  return number + 10000
}

const easyCalculate = number => {
  console.log("짧은 작업 시작")
  return number + 1
}

function App() {
  // const [hardNumber, setHardNumber] = useState(1);
  // const [easyNumber, setEasyNumber] = useState(1);
  //
  // const hardSumMemo = useMemo(() => {
  //   return hardCalculate(hardNumber)
  // }, [hardNumber]);

  // const hardSum = hardCalculate(hardNumber);
  // const easySum = easyCalculate(easyNumber);

  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // location 얘가 객체라면? -> number 가 변경되어도 이펙트 발생
  // const location = isKorea ? '한국' : '외국';
  // const location = {
  //   country: isKorea ? '한국' : '외국',
  // };

  const location = useMemo(() => {
    return {
      country: isKorea ? '한국' : '외국'
    }
  }, [isKorea])

  useEffect(() => {
    console.log('이펙트 발생')
  }, [location]);

  return (
    <>
      {/*<h3>계산기</h3>
      <input type="number" value={hardNumber} onChange={e => setHardNumber(+e.target.value)}/>
      <span> + 10000 = {hardSumMemo}</span>

      <h3>빠른 계산기</h3>
      <input type="number" value={easyNumber} onChange={e => setEasyNumber(+e.target.value)}/>
      <span> + 10000 = {easySum}</span>

      <hr/>*/}

      <h2>하루에 몇끼 먹어용?</h2>
      <input type="number" value={number} onChange={e => setNumber(+e.target.value)}/>

      <hr/>

      <h2>어디나라에 있나용?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>이동</button>
    </>
  )
}

export default App