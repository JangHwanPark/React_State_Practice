import React from 'react';

export default function ObjectStateRadio({ ...rest }) {
    const {title, data, name, option, onChecked} = rest;
    return (
        <>
            <h3>{title}</h3>
            {data.map((item) => (
                <div key={item}>
                    <input
                        key={item}
                        id={`check-color-${item}`}
                        type="radio"
                        name={name}
                        value={item}
                        checked={option === item}
                        onChange={(e) => onChecked(e)}
                    />
                    <label htmlFor={`check-color-${item}`}>{item}</label>
                </div>
            ))}
        </>
    );
}