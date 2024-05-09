import React from 'react';

export default function SelectComponent({koreanCardCompanies, pgCompany, setCardCompany}) {
    const handleChange = (e) => {
        setCardCompany(e.target.value)
    }

    return (
        <select name="card_combo" id="card-combo" onChange={handleChange} required="required">
            <option value="" disabled hidden>카드사를 선택하세요.</option>
            {koreanCardCompanies.map(item => (
                <option key={item.value} value={item.value}>{item.name}</option>
            ))}
        </select>
    );
}