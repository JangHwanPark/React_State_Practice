import React from 'react';

export default function CardComponent({...props}) {
    const {pgCompany, cardNumber, validity, securityCode} = props;

    return (
        <div>
            {pgCompany}
            {cardNumber}
            {validity}
            {securityCode}
        </div>
    );
}