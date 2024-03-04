import React from 'react';

export default function PropsPractice({name, developed, type, language, license}) {
    return (
        <div>
            <h1>PropsPractice</h1>
            <p>이름 : {name}</p>
            <p>개발사 : {developed}</p>
            <p>유형 : {type}</p>
            <p>언어 : {language}</p>
            <p>라이선스 : {license}</p>
        </div>
    );
}