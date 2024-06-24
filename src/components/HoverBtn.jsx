import React, {useState} from 'react';
import {CiSettings} from "react-icons/ci";

export default function HoverBtn() {
    const [hover, setHover] = useState(false);
    
    const handleHover = () => {
        setHover(true)
    }

    const handleMouseOut = () => {
        setHover(false)
    }

    /**
     * 마우스 오버이벤트는 onMouseOver, onMouseOut 을 사용한다.
     * 조건문을 사용하면 하나의 함수로 로직을 단순화 할 수 있다.
     */
    return (
        <>
            <button onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                <CiSettings/>
            </button>
            <div className={hover ? "over" : "non"}>설정</div>
        </>
    );
}