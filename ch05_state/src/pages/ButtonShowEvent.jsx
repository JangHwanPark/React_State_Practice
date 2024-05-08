import React from 'react';
import ToggleFadeInAnimation from "../components/useEffect/ToggleFadeInAnimation";

export default function ButtonShowEvent() {
    const [show, setShow] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? '숨기기' : '보이기'}
            </button>
            <hr/>
            {show && <ToggleFadeInAnimation/>}
        </div>
    );
}