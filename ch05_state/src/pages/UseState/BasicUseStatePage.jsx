import React, {useState} from 'react';

export default function BasicUseStatePage() {
    // useState 를 활용한 숫자, 문자, 논리값 상태 관리
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');
    const [isCheck, setIsCheck] = useState(false);
    
    // useState 를 활용한 두개의 상태변수 관리
    const [uName, setUname] = useState('');
    const [uAge, setUAge] = useState(0);
    
    // 이벤트 핸들러
    const handleCounter = (increment) => {
        if (increment) setCounter(prevCounter => prevCounter + 1);
        else setCounter(prevCounter => prevCounter - 1);
    };
    
    return (
        <div className={'col-span-12'}>
            <div className={'mb-5'}>
                <h2>useState 를 활용한 숫자 상태 관리</h2>
                <button onClick={() => handleCounter(true)} className={'border-2 border-black'}>증가</button>
                <button onClick={() => handleCounter(false)} className={'border-2 border-black'}>감소</button>
                <p>숫자 상태 : {counter}</p>
            </div>
            <div className={'mb-5'}>
                <h2>useState 를 활용한 문자상태 관리</h2>
            </div>
            <div className={'mb-5'}>
                <h2>useState 를 활용한 논리값 상태 관리</h2>
            </div>
            <div>
                <h2>useState 를 활용한 두개의 상태변수 관리</h2>
            </div>
        </div>
    );
}