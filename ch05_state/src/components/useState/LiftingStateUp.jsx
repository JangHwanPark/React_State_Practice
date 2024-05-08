import React from 'react';

// 상태 끌어올리기 예제
export default function LiftingStateUp({...rest}) {
    const {state, onStateChange} = rest;

    // 부모 상태 변경 함수 호출
    const handleClickStateUp = () => {
        onStateChange(state + 1);
    }
    const handleClickStateDown = () => {
        onStateChange(state - 1);
    }
    
    return (
        <div>
            <h2>상태 끌어올리기 예제</h2>
            <button onClick={handleClickStateUp}>클릭하면 1 증가</button>
            <button onClick={handleClickStateDown}>클릭하면 1 감소</button>
        </div>
    );
}