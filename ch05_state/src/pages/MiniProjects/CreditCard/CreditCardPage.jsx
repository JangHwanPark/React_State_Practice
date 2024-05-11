import React, {useEffect, useState} from 'react';
import InputComponent from "./InputComponent";
import CardComponent from "./CardComponent";
import SelectComponent from "./SelectComponent";

const koreanCardCompanies = [
    { name: "신한카드", value: "shinhan" },
    { name: "KB국민카드", value: "kb" },
    { name: "삼성카드", value: "samsung" },
    { name: "현대카드", value: "hyundai" },
    { name: "롯데카드", value: "lotte" },
    { name: "하나카드", value: "hana" },
    { name: "우리카드", value: "woori" },
    { name: "NH농협카드", value: "nh" },
    { name: "비씨카드", value: "bc" },
    { name: "씨티카드", value: "citi" }
];

const InputInfo = [
    { inputId: "number", label: "카드번호", parts: [{ maxLength: 4 }, { maxLength: 4 }, { maxLength: 4 }, { maxLength: 4 }] },
    { inputId: "validity", label: "유효기간", parts: [{ maxLength: 2 }, { maxLength: 2 }] },
    { inputId: "security", label: "보안코드 (CVC/CVV)", parts: [{ maxLength: 3 }] },
    { inputId: "password", label: "비밀번호", parts: [{ maxLength: 2 },{ maxLength: 2 }] },
];

export default function CreditCardPage() {
    const [pgCompany, setCardCompany] = useState('카드사를 선택하세요.');
    const [cardInfo, setCardInfo] = useState({
        number: "", validity: "", security: "", password: ""
    }); // 카드 상태 객체로 관리

    const handleChangeInput = (name, value, idx) => {
        console.log(`name: ${name}`)
        console.log(`value: ${value}`)

        setCardInfo(prev => {
            console.log(`prev: ${prev}`)
            let newValue = value
            if (name === "number") {
                let parts = prev.number.split(' ');
                parts[idx] = value;
                newValue = parts.join(' ');
            }

            return { ...prev, [name]: newValue }
        });
    }

    useEffect(() => {
        console.log("Updated cardInfo:", cardInfo);
    }, [cardInfo]);

    console.log(cardInfo)

    return (
        <div className={'col-span-12'}>
            <SelectComponent
                koreanCardCompanies={koreanCardCompanies}
                pgCompany={pgCompany}
                setCardCompany={setCardCompany}
            />

            {/* ***** 카드정보 출력 ***** */}
            <CardComponent
                pgCompany={pgCompany}
                {...cardInfo}
            />

            {/* ***** 카드정보 입력 ******/}
            {InputInfo.map(info => (
                <InputComponent
                    key={info.inputId}
                    inputId={info.inputId}
                    label={info.label}
                    parts={info.parts}
                    onChange={handleChangeInput}
                />
            ))}
        </div>
    );
}