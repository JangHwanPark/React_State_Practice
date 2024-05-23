import React, {useState} from 'react';

export default function Toggle() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

    return (
        <div>
            <button onClick={handleClick}>
                {toggle ? "close" : "on"}
            </button>
            {toggle && <div>toggle</div>}
        </div>
    );
}