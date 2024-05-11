import React from 'react';

export default function InputComponent({...props}) {
    const {inputId, label, parts, onChange} = props;
    //console.log(`input ID: ${inputId}`)

    return (
        <div>
            <label htmlFor={inputId}>{label}</label>
            {parts.map((part, index) => (
                <input
                    key={`${inputId}-${index}`}
                    id={`${inputId}-${index}`}
                    className="border-b-2 border-black"
                    type="text"
                    onChange={(e) => onChange(inputId, e.target.value, index)} // 고유 식별자 전달
                    maxLength={part.maxLength}
                    size={part.size || part.maxLength}
                    style={{ width: `${part.size * 10}px` }}
                />
            ))}
        </div>
    );
}