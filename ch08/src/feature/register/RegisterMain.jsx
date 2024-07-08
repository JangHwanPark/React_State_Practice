import React, {useState} from 'react';
import RegisterForm from "./RegisterForm.jsx";

const RegisterMain = () => {
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const handleClick = () => {
    setIsOpenRegister(!isOpenRegister)
  }

  return (
    <div>
      <button onClick={handleClick}>회원가입</button>
      {isOpenRegister && <RegisterForm handleClick={handleClick}/>}
    </div>
  );
};

export default RegisterMain;