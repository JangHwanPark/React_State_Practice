import React, {useEffect, useState} from 'react';

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
        <div className={'text-xl'}>
            <div className={'mb-5'}>
                <h1>검색 결과</h1>
            </div>
            {lang ? (
                lang.languages.map((item, idx) => (
                    <div key={idx} className={'text-blue-500'}>
                        <p>Name: {item.name}</p>
                        <p>Type: {item.type}</p>
                        <p>Designed by: {item.designed_by}</p>
                    </div>
                ))
            ) : (
                <p>데이터 로딩 중...</p>
            )}
        </div>
    );
}