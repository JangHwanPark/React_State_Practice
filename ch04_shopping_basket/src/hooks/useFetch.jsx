import {useEffect, useState} from "react";

import React from 'react';

export default function useFetch(url) {
    // 데이터를 추가할 상태 추가
    const [products, setProducts] = useState();

    useEffect(() => {
        // fetch 호출과 프로미스 체인을 사용
        fetch(url)
            // 첫 번째 then 에서 응답을 Json 으로 반환
            .then(res => res.json())

            // Json 으로 변환된 데이터를 상태에 저장
            .then(data => setProducts(data))

            // 에러 처리
            .catch(err => console.error('Fetching data failed:', err))
    }, [url]);

    // 업데이트된 상태 반환
    return {products};
}