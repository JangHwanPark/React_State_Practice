import React from 'react';

export default function ObjStateSelect({extras, onChecked}) {
    return (
        <>
            {extras.map(({label, key}) => {
                const itemId = key.replace(/\s+/g, '').toLowerCase();
                console.log(`itemId : ${itemId}`)

                // 공백 제거 및 소문자로 변환하여 id 생성
                const normalizedId = key.toLowerCase().replace(/\s+/g, '');
                console.log(`normalizedId: ${normalizedId}`)

                console.log(`extras[key]: ${extras[key]}`)

                return (
                    <div key={key}>
                        <input
                            id={itemId}
                            type="checkbox"
                            checked={normalizedId || false}
                            onChange={onChecked}
                        />
                        <label htmlFor={itemId}>{label}</label>
                    </div>
                )
            })}
        </>
    );
}