import React from 'react';
import GridLayout from "../layout/GridLayout";
import SideMenu from "../components/SideMenu/SideMenu";
import PostsList from "../components/PostsList/PostsList";

export default function Home() {
    return (
        <GridLayout>
            <PostsList/>
            <SideMenu/>
        </GridLayout>
    );
}