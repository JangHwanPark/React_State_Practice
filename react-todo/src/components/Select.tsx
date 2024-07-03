import React from 'react';

const programming_data = [
  "자바스크립트", "자바", "C/C++", "파이썬", "코틀린", "타입스크립트"
]

export default function Select() {
  return (
    <select>
      {programming_data.map(item => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
  );
}