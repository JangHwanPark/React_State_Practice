import React, {useState} from 'react';

export default function UseStatePrev(props) {
    const [count, setCount] = useState(0);
    const handleSum = () => {
        setCount(count + 1);
        setCount(count + 2);
        setCount(count + 3);
        setCount(count + 4);
        setCount(count + 5);
    }

    const handlePrevSum = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 2);
        setCount((prev) => prev + 3);
        setCount((prev) => prev + 4);
        setCount((prev) => prev + 5);
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