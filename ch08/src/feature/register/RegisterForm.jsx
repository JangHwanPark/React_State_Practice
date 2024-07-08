import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";

const users = [
  {label: '아이디', type: 'text', name: 'id'},
  {label: '비밀번호', type: 'password', name: 'password'},
  {label: '비밀번호 확인', type: 'password', name: 'passwordConform'},
  {label: '이름', type: 'password', name: 'name'},
  {label: '전화번호', type: 'number', name: 'phone'},
]

const Container = styled.div`
    width: 768px;
    height: 300px;
    background: #fff;
    position: absolute;
    top: 40%;
    right: 25%;
`

const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const RegisterForm = ({ handleClick }) => {
  const [inputVar, setInputVar] = useState({
    id: '',
    password: '',
    passwordConform: '',
    name: '',
    phone: '',
  });
  const [userInfo, setUserInfo] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputVar(prevInput => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo(prevUserInfo => [...prevUserInfo, inputVar]);
  }

  const inputFocus = useRef(null)

  useEffect(() => {
    inputFocus.current.focus();
  }, [])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {users.map((item, index) => (
          <div key={index}>
            <label htmlFor={`input-${index}`}></label>
            <input
              ref={index === 0 ? inputFocus : null}
              id={`input-${index}`}
              type={item.type}
              name={item.name}
              placeholder={`${item.label}를 입력해 주세요`}
              onChange={handleChange}
            />
          </div>
        ))}

        <div>
          <button>회원가입</button>
          <button onClick={handleClick}>닫기</button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterForm;