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
    console.log(value)
  }

  const handleChangePhone = (e) => {
    const { value, name } = e.target;
    setPhoneNumber(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div>
      <DateButton date={date} setDate={setDate}/>
      <Calendar date={date} dayNames={dayNames}/>
      <div>
        <label htmlFor="">이름</label>
        <input
          type="text"
          value={inputName}
          onChange={handleChangeName}
        />
      </div>
      <div>
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
    </div>
  )
}

export default App
