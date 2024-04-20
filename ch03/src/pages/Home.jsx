import React from 'react';
import GridLayout from "../layout/GridLayout";
import SideMenu from "../components/SideMenu/SideMenu";
import PostsList from "../components/PostsList/PostsList";
import Categorise from "../components/Categorise/Categorise";
import Title from "../components/Title/Title";

export default function Home() {
    return (
        <>
            <Title/>
            <Categorise/>
            <GridLayout>
                <PostsList/>
                <SideMenu/>
            </GridLayout>
        </>
    );
}