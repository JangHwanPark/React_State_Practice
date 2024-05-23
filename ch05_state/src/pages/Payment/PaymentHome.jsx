import React from 'react';
import {Link} from "react-router-dom";

export default function PaymentHome() {
    return (
        <div>
            <Link to={'/payment'}>Kakao Pay (카카오페이) 결제하기</Link>
            <Link to={'/payment'}>페이팔 결제하기</Link>
            <Link to={'/payment'}>KG이니시스 (INICIS) 결제하기</Link>
            <Link to={'/payment'}>NHN KCP (INICIS) 결제하기</Link>
            <Link to={'/payment'}>토스 (Toss Payments) 결제하기</Link>
            <Link to={'/payment'}>네이버페이 (Naver Pay) 결제하기</Link>
            <Link to={'/payment'}>페이코 (PAYCO) 결제하기</Link>
            <Link to={'/payment'}>삼성 페이 (Samsung Pay) 결제하기</Link>
            <Link to={'/payment'}>다날 (Danal) 결제하기</Link>
        </div>
    );
}