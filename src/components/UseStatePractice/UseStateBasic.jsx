import React, {useEffect, useState} from 'react';

export default function UseStateBasic(props) {
    const [count, setCount] = useState(0);
    const handleClickCntUp = () => setCount(count + 1);
    const handleClickCntDown = () => setCount(count - 1);
    const handleClickPrevUp = () => setCount(Prev => Prev + 1);
    const handleClickPrevDown = () => setCount(Prev => Prev - 1);

    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div>
            <h1>UseState Count</h1>
            <div>Count : {count}</div>
            <div>
                <button onClick={handleClickCntUp}>Up</button>
                <button onClick={handleClickCntDown}>Down</button>
            </div>
            <div>
                <button onClick={handleClickPrevUp}>Prev Up</button>
                <button onClick={handleClickPrevDown}>Prev Down</button>
            </div>
        </div>
    );
}