import React from 'react';
import LiftingStateUp from "../../components/useState/LiftingStateUp";

export default function LiftingStateUpPage() {
    // 부모 컴포넌트에서 상태 관리
    const [state, setState] = React.useState(0);

    // 자식 컴포넌트가 상태를 변경할 때 호출할 함수
    const handleStateChange = (newState) => {
        setState(newState);
    }

    return (
        <div className={'col-span-12'}>
            <LiftingStateUp state={state} onStateChange={handleStateChange}/>
            <p>현재 상태값: {state}</p>
        </div>
    );
}