import React, {ChangeEvent} from 'react';

interface InputProps {
  handleChange: (value: string) => void;
}

const Input: (
  {
    setInputItem
  }) => React.JSX.Element = ({setInputItem}) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputItem(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={handleChange}/>
    </div>
  );
};

export default Input;