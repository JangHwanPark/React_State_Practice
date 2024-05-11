import React from 'react';

export default function ObjectStateRadio({ title, COLORS, option, onChecked }) {
    return (
        <>
            <h3>{title}</h3>
            {COLORS.map((item) => (
                <div key={item}>
                    <input
                        key={item}
                        id={`check-color-${item}`}
                        type="radio"
                        name="color"
                        value={item}
                        checked={option.color === item}
                        onChange={onChecked}
                    />
                    <label htmlFor={`check-color-${item}`}>{item}</label>
                </div>
            ))}
        </>
    );
}