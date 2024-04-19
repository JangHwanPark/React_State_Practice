import React, {useEffect, useState} from 'react';
import AllData from "../components/AllData";
import SearchData from "../components/SearchData";

export default function Home() {
    // 데이터 패칭
    const fetchUrl = 'https://janghwanpark.github.io/data-storage/json-data/programming-languages/languages.json'
    const [lang, setLang] = useState();

    useEffect(() => {
        console.log('데이터 패칭 중...');
        fetch(fetchUrl, { method: 'GET' })
            .then(res => res.json())
            .then(data => {
                setLang(data);
                console.log('패칭된 데이터:', data);
            })
            .catch(error => console.error('패칭 에러:', error)); // 에러 핸들링 추가
    }, []);

    // 사용자 입력
    const [input, setInput] = useState('');
    
    // 렌더링
    return (
        <div className={'text-xl grid grid-cols-4'}>
            <SearchData title={'검색 결과'}/>
            <SearchData title={'검색 기록'}/>
            <SearchData title={'실시간 급상승 검색어'}/>
            <AllData data={lang}/>
        </div>
    );
}