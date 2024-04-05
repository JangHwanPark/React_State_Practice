import React, {useState} from 'react';

export default function UseStatePrev(props) {
    const [count, setCount] = useState(0);
    const handleSum = () => {
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }

    const handlePrevSum = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    return (
        <div>
            <h1>UseState Count</h1>
            <div>Count : {count}</div>
            <button onClick={handleSum}>handleSum</button>
            <button onClick={handlePrevSum}>handlePrevSum</button>
        </div>
    );
}