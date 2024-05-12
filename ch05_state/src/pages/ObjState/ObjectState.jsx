import React, {useState} from 'react';
import ObjectStateRadio from "./ObjectStateRadio";
import ObjStateSelect from "./ObjStateSelect";

const COLORS = ["black", "red", "blue", "white", "gray"]
const ENGINE = ["V4", "V6", "V8"]

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
        console.log("Before updating state:", option);  // 상태 변경 전 로그
        console.log(`e.target.name: ${e.target.name}, e.target.value: ${e.target.value}`);  // 입력된 값 로그
        setOption((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    console.log(option)
    console.log(option.color)

    return (
        <div className={'col-span-12'}>
            <h2>객체 상태 관리 연습</h2>
            <div className={'flex gap-3'}>
                <div>
                    <ObjectStateRadio
                        title="차량 색상"
                        data={COLORS}
                        option={option.color}
                        name="color"
                        onChecked={onChecked}
                    />
                </div>
                <div>
                    <ObjectStateRadio
                        title="엔진 선택"
                        data={ENGINE}
                        option={option.enginType}
                        name="enginType"
                        onChecked={onChecked}
                    />
                </div>
                <div>
                    <ObjStateSelect/>
                </div>
                <div>
                    <div>차량 색상: {option.color}</div>
                    <div>엔진 타입: {option.enginType}</div>
                </div>
            </div>
        </div>
    );
}