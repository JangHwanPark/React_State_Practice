import React from 'react';

export default function ProductItem({product}) {
    console.log(product)
    return (
        <div>
            <h2>User ID: {product.userId}</h2>
            <h2>ID: {product.id}</h2>
            <h2>Title: {product.title}</h2>
        </div>
    );
}