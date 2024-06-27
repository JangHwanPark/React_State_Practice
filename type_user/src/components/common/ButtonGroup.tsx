import React from 'react';

interface ButtonGroupProps {
    title: string;
    type: string;
    onClick?: () => void;
}

/**
 * style 1 : btn-style-one */
export default function ButtonGroup<ButtonGroupProps>(
    {
        title,
        type,
        onClick
    }
) {
    return (
        <button
            className='btn-style-one'
            type={type}
            onClick={onClick}
        >
            {title}
        </button>
    );
}