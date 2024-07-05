import React from 'react';
import Divider from "../../components/atoms/Divider";

export default function BasketSection({sectionTitle, className, children}) {
    return (
        <section className={className}>
            <div>{sectionTitle}</div>
            <Divider/>
            {children}
        </section>
    );
}