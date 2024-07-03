import React from 'react';

interface RadioProps {
  id: string;
  type: string;
  name: string;
  text: string;
}

const Radio: React.FC<RadioProps> = (
  {id, type, name, text}
) => {

  return (
    <div>
      <input id={id} type={type} name={name}/>
      <label htmlFor={id}>{text}</label>
    </div>
  );
};

export default Radio;