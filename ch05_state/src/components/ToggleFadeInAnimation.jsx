import React, {useEffect, useRef} from 'react';
import FadeInAnimation from "../utils/ToggleAnimation";

export default function ToggleFadeInAnimation() {
    const ref = useRef(null);
    console.log(`useRef: ${ref}`);

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(1000);
        return () => {
            animation.stop();
        }
    }, []);

    return (
        <div>
            <h1 ref={ref}>Hello</h1>
        </div>
    );
}