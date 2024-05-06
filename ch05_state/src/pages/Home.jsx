import React from 'react';
import LiftingStateUp from "../components/LiftingStateUp";
import ArrayUseState from "../components/ArrayUseState";

export default function Home() {
    // 부모 컴포넌트에서 상태 관리
    const [state, setState] = React.useState(0);

    // 배열 상태 관리
    const [arrayState, setArrayState] = React.useState([]);
    
    // 자식 컴포넌트가 상태를 변경할 때 호출할 함수
    const handleStateChange = (newState) => {
        setState(newState);
    }
    
    return (
        <>
            <div className={'grid-col-12'}>
                <h2>Home</h2>
                <p>Welcome to the home page!</p>
            </div>
            <div className={'grid-col-6'}>
                <LiftingStateUp state={state} onStateChange={handleStateChange}/>
                <p>현재 상태값: {state}</p>
            </div>
            <div className={'grid-col-6'}>
                <ArrayUseState state={arrayState} setState={setArrayState}/>
            </div>
        </>
    );
}