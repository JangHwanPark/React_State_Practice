import React from 'react';
import LiftingStateUp from "../components/LiftingStateUp";

export default function Home() {
    // 부모 컴포넌트에서 상태 관리
    const [state, setState] = React.useState(0);
    
    // 자식 컴포넌트가 상태를 변경할 때 호출할 함수
    const handleStateChange = (newState) => {
        setState(newState);
    }
    
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <p>현재 상태값: {state}</p>
            <LiftingStateUp state={state} onStateChange={handleStateChange}/>
        </div>
    );
}