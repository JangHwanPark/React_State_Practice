import React, {useState} from 'react';

export default function UseStateBasic(props) {
    const [count, setCount] = useState(0);
    const handleClickCntUp = () => setCount(count + 1);
    const handleClickCntDown = () => setCount(count - 1);

    return (
        <div>
            <h1>UseState Count</h1>
            <div>Count : {count}</div>
            <button onClick={handleClickCntUp}>Up</button>
            <button onClick={handleClickCntDown}>Down</button>
        </div>
    );
}