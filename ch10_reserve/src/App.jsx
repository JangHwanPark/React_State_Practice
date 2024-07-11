import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateButton from "./DateButton.jsx";
import Calendar from "./Calendar.jsx";

const dayNames = ['일', '월', '화', '수', '목', '금', '토']
function App() {
  const [date, setDate] = useState(new Date());
  const [selectDate, setSelectDate] = useState('');
  const [inputName, setInputName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState({ part1: '010', part2: '', part3: '' });

  const handleChangeName = (e) => {
    const { value } = e.target;
    setInputName(value)
  }

  const handleChangePhone = (e) => {
    const { value, name } = e.target;
    setPhoneNumber(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className='container'>
      <DateButton date={date} setDate={setDate}/>
      <Calendar date={date} dayNames={dayNames} setSelectDate={setSelectDate}/>
      <div className='input-wrapper'>
        <label htmlFor="">이름</label>
        <input
          type="text"
          value={inputName}
          onChange={handleChangeName}
        />
      </div>
      <div className='input-wrapper'>
        <label htmlFor="">전화번호</label>
        <input
          type="text"
          name='part1'
          value={phoneNumber.part1}
          onChange={handleChangePhone}
        />
        <input
          type="text"
          name='part2'
          value={phoneNumber.part2}
          onChange={handleChangePhone}
        />
        <input
          type="text"
          name='part3'
          value={phoneNumber.part3}
          onChange={handleChangePhone}
        />
      </div>
      <div>
        <p>{date.getFullYear()}년 {date.getMonth() + 1}월 {selectDate}일</p>
        <p>{inputName}</p>
        <p>{phoneNumber.part1}-{phoneNumber.part2}-{phoneNumber.part3}</p>
      </div>
    </div>
  )
}

export default App
