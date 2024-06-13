import React, {useState} from 'react';

const products = [
    "진라면",
    "신라면",
    "안성탕면",
    "라면볶이",
    "라면사리"
];

export default function Search() {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
        console.log(search)
    };

    const filteredProducts = products.filter(product =>
        product.includes(search)
    );

    return (
        <div>
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={search}
                onChange={handleSearch}
            />
            <ul>
                {filteredProducts.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
}