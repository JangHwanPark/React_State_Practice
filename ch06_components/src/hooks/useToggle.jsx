import React, {useState} from 'react';

export default function useToggle() {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);
    return {toggle, handleClick}
}