import React from 'react';

export default function CardComponent({...props}) {
    const {pgCompany, ...cardInfo} = props;
    console.log(`CreditCardPage: ${pgCompany}`)
    console.log(`cardInfo: ${JSON.stringify(cardInfo)}`)
    console.log(`CardNumber: ${cardInfo.number}`)

    return (
        <div>
            <div>
                <span>카드사</span>
                <span>{pgCompany}</span>
            </div>
            <div>
                <span>카드번호</span>
                <span>{cardInfo.number}</span>
            </div>
            <div>
                <span>유효기간</span>
                <span>{cardInfo.validity}</span>
            </div>
            <div>
                <span>CVC/CVV</span>
                <span>{cardInfo.security}</span>
            </div>
        </div>
    );
}