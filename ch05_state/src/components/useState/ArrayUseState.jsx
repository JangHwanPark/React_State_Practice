import React from 'react';

export default function ArrayUseState({...rest}) {
    const {state, setState} = rest;
    console.log(`ArrayUseState: ${state}`);
    const onClickAdd = () => {
        setState([...state, '클릭']);
    }

    const onClickDelete = () => {
        setState([...state.slice(0, state.length - 1)]);
    }

    return (
        <div className={'grid'}>
            <h2 className={'grid-col-12'}>배열 상태 관리</h2>
            <div className={'grid-col-6'}>
                <div className={'flex flex-col'}>
                    <button onClick={onClickAdd}>클릭하면 맨 뒤 요소추가</button>
                    <button onClick={onClickDelete}>클릭하면 맨 뒤 요소삭제</button>
                </div>
            </div>
            <div className={'arr-result grid-col-12'}>
                {state.map((item, idx) => <span key={idx}>{item}</span>)}
            </div>
        </div>
    );
}