import React, {useState} from 'react';
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
    { inputId: "card-number", label: "카드번호", parts: [{ maxLength: 4 }, { maxLength: 4 }, { maxLength: 4 }, { maxLength: 4 }] },
    { inputId: "validity-period", label: "유효기간", parts: [{ maxLength: 2 }, { maxLength: 2 }] },
    { inputId: "security-code", label: "보안코드 (CVC/CVV)", parts: [{ maxLength: 3 }] },
    { inputId: "card-pwd", label: "비밀번호", parts: [{ maxLength: 4 }] },
];

export default function CreditCardPage() {
    const [pgCompany, setCardCompany] = useState('카드사를 선택하세요.');
    const [cardNumber, setCardNumber] = useState();
    const [validity, setValidity] = useState();
    const [securityCode, setSecurityCode] = useState();
    const [cardPass, setCardPass] = useState();

    console.log(`CreditCardPage: ${pgCompany}`)
    console.log(`CardNumber: ${cardNumber}`)

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
                cardNumber={cardNumber}
                validity={validity}
                securityCode={securityCode}
            />

            {/* ***** 카드정보 입력 ******/}
            {InputInfo.map(info => (
                <InputComponent
                    key={info.inputId}
                    inputId={info.inputId}
                    label={info.label}
                    parts={info.parts}
                />
            ))}
        </div>
    );
}