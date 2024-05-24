import React, {useState} from 'react';
import useToggle from "../hooks/useToggle";

export default function Toggle() {
    const {toggle, handleClick} = useToggle();

    return (
        <div>
            <button onClick={handleClick}>
                {toggle ? "close" : "on"}
            </button>
            {toggle && <div>toggle</div>}
        </div>
    );
}