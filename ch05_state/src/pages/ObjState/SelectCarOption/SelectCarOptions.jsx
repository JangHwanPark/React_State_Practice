import React, {useState} from 'react';
import ObjectStateRadio from "./ObjectStateRadio";
import ObjStateSelect from "./ObjStateSelect";

const COLORS = ["black", "red", "blue", "white", "gray"];
const ENGINE = ["V4", "V6", "V8"];

// const EXTRAS = ["선루프", "네비게이션", "핸들 열선"]
// 키를 추가해야함
const EXTRAS = [
    { label: "선루프", key: "sunroof" },
    { label: "네비게이션", key: "navigationSystem" },
    { label: "핸들 열선", key: "heatedSeats" }
];

export default function SelectCarOptions() {
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
        console.log("상태 변경 전:", option);
        console.log(`입력된 값 로그 e.target.name: ${e.target.name}, e.target.value: ${e.target.value}`);
        setOption((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    const onCheckedExtras = (e) => {
        const { id, checked } = e.target;  // id는 input의 id, checked는 체크 상태(boolean)
        console.log("Change Event: " + id + ", checked: " + checked);
        setOption(prev => ({
            ...prev,
            extras: {
                ...prev.extras,
                [id]: checked
            }
        }))
    }

    return (
        <div className={'flex gap-10'}>
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
                <h3>기타 옵션</h3>
                <ObjStateSelect
                    extras={EXTRAS}
                    onChecked={onCheckedExtras}
                />
            </div>
            <div>
                <div>차량 색상: {option.color}</div>
                <div>엔진 타입: {option.enginType}</div>
                <div>선루프: {option.extras.sunroof ? "선택" : "미선택"}</div>
                <div>네비게이션: {option.extras.navigationSystem ? "선택" : "미선택"}</div>
                <div>열선 시트: {option.extras.heatedSeats ? "선택" : "미선택"}</div>
            </div>
        </div>
    );
}