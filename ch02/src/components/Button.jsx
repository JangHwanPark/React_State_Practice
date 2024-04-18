import React from 'react';

export default function Button({title, className, ...rest}) {
    return (
        <button className={className} {...rest}>{title}</button>
    );
}