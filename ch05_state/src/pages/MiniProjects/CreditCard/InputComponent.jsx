import React from 'react';

export default function InputComponent({inputId, label, parts}) {


    return (
        <div>
            <label htmlFor={inputId}>{label}</label>
            {parts.map((part, index) => (
                <input
                    key={`${inputId}-${index}`}
                    id={`${inputId}-${index}`}
                    className="border-b-2 border-black"
                    type="text"
                    maxLength={part.maxLength}
                    size={part.size || part.maxLength}
                    style={{ width: `${part.size * 10}px` }}
                />
            ))}
        </div>
    );
}