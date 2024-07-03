import React, {ChangeEvent, useState} from 'react';

const programming_data = [
  "자바스크립트", "자바", "C/C++", "파이썬", "코틀린", "타입스크립트"
]

export default function Select() {
  const [selectedLanguage, setSelectedLanguage] = useState('none');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedLanguage(selectedValue);
    console.log("선택된 언어:", selectedValue);
  }

  return (
    <select value={selectedLanguage} onChange={handleSelectChange}>
      <option value="none" disabled>선택하세요</option>
      {programming_data.map((item: string, index: number) => (
        <option key={item} value={item}>{item}</option>
      ))}
      {/*<option>직접 입력</option>*/}
    </select>
  );
}