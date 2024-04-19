import React from 'react';

export default function AllData({data}) {
    return (
        <div>
            <h1>검색 키워드</h1>
            {data ? (
                data.languages.map((item, idx) => (
                    <div key={idx} className={'text-blue-500 pb-3'}>
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