import React from 'react';
import {NavLink} from "react-router-dom";

export default function Logo() {
    return <h2 className={'shop-logo'}><NavLink to={'/'}>Logo</NavLink></h2>
}