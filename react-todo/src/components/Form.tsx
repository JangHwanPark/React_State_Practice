import React, {FormEvent, useState} from 'react';
import Radio from "./Radio.tsx";
import Button from "./Button.tsx";
import Input from "./Input.tsx";
import Select from "./Select.tsx";

const Form = ({setProgramming, programming}) => {
  const [inputItem, setInputItem] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // inputItem !== '' ? setProgramming([...programming, inputItem]) : alert('빈칸입력 ㄴㄴ')
    if (inputItem !== '') {
      setProgramming([...programming, inputItem])
      console.log(programming)
      console.log(inputItem)
    } else {
      alert('빈칸입력 ㄴㄴ')
    }
  }

  return (
    <form className="input_group" onSubmit={handleSubmit}>
      <div>
        <Radio id="input" type="radio" name="select" text="입력하기"/>
        <Radio id="input" type="radio" name="select" text="선택하기"/>
      </div>
      <Select/>
      <Input setInputItem={setInputItem}/>
      <Button type="submit" text="추가"/>
    </form>
  );
};

export default Form;