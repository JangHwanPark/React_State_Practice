import React, {useState} from 'react';
import ObjectStateRadio from "./ObjectStateRadio";

const COLORS = ["black", "red", "blue", "white", "gray"]
const engine = ["V4", "V6", "V8"]

export default function ObjectState() {
    const [option, setOption] = useState({
        color: "black",
        enginType: "V8",
        extras: {
            sunroof: false,
            navigationSystem: false,
            heatedSeats: false
        }
    });

    const onChecked = (e) => {
        console.log(`e.target.value: ${e.target.value}`)
        setOption({color: e.target.value});
    }

    console.log(option)
    console.log(option.color)

    return (
        <div className={'col-span-12'}>
            <div>
                <h2>객체 상태 관리 연습</h2>
                <ObjectStateRadio
                    title="차량 색상"
                    COLORS={COLORS}
                    option={option}
                    onChecked={onChecked}
                />
            </div>
            <div>Color: {option.color}</div>
        </div>
    );
}