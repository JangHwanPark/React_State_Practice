import {useEffect, useState} from "react";

import React from 'react';

export default function useFetch(url) {
    // 데이터를 추가할 상태 추가
    const [products, setProducts] = useState();
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url);
                const data = await res.json();

                // 서버에서 받아온 데이터를 상태에 저장
                setProducts(data)
            } catch (err) {
                console.error('Fetching data failed:', err);
            }
        }

        fetchData();
    }, []);
    
    // 업데이트된 상태 반환
    return {products};
}