import './App.css'
import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import Select from "./components/Select.tsx";
import Header from "./components/Header.tsx";
import React, {ChangeEvent, FormEvent, useState} from "react";

const programming_data = [
  "자바스크립트", "자바", "C/C++", "파이썬", "코틀린", "타입스크립트"
]

function App() {
  const [programming, setProgramming] = useState([]);
  const [inputItem, setInputItem] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('none');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputItem(e.target.value);
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedLanguage(selectedValue);
    console.log("선택된 언어:", selectedValue);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputItem !== '') {
      setProgramming([...programming, inputItem])
      console.log(programming)
      console.log(inputItem)
    } else {
      alert('빈칸입력 ㄴㄴ')
    }
  }

  return (
    <div>
      <Header title="React CURD"/>
      <main>
        <form className="input_group" onSubmit={handleSubmit}>
          <div>
            <input id="selected" type="radio" name="select"/>
            <label htmlFor="selected">선택하기</label>
            <input id="input" type="radio" name="select"/>
            <label htmlFor="input">입력하기</label>
          </div>
          <select value={selectedLanguage} onChange={handleSelectChange}>
            <option value="none" disabled>선택하세요</option>
            {programming_data.map((item: string, index: number) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
          <div>
            <input type="text" onChange={handleChange}/>
          </div>
          <button>추가</button>
        </form>
        <section className="contents">
          <ul>
            {programming.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
                <button className="btn_update">수정</button>
                <button className="btn_delete">삭제</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App