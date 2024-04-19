import React from 'react';

export default function Input({className, ...rest}) {
    // ...rest (스프레드 연산자) 사용하면 onChange, placeholder, value 등 값 다 받을수있음 (유연함)
    // className 은 조건부 렌더링 등의 가능성 있기에 별도로 분리
    return (
        <>
            <label htmlFor="search"></label>
            <input id="search" className={className} type="text" {...rest} />
        </>
    );
}