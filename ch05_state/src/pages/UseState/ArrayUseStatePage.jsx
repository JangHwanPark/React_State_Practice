import React from 'react';
import ArrayUseState from "../../components/useState/ArrayUseState";

export default function ArrayUseStatePage() {
    // 배열 상태 관리
    const [arrayState, setArrayState] = React.useState([]);

    return (
        <div className={'col-span-12'}>
            <ArrayUseState state={arrayState} setState={setArrayState}/>
        </div>
    );
}