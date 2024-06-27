import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const asideMenu = [
    {path: "/", label: "현재 섹션"},
    {path: "/section1", label: "Section 1"},
    {path: "/section2", label: "Section 2"},
    {path: "/section3", label: "Section 3"},
    {path: "/section4", label: "Section 4"},
]

export default function AsideBar() {
    // useLocation 을 사용하여 현재 경로를 가져옴
    const location = useLocation();
    const current_path = location.pathname;

    return (
        <aside className="aside-bar">
            <div className="aside-bar-header">
                <h2>AsideBar</h2>
            </div>
            <nav className="aside-bar-nav">
                <ul>
                    {asideMenu.map(menu => (
                        <li
                            key={menu.path}
                            className={current_path === menu.path ? "active" : ""}
                        >
                            <Link to={menu.path}>
                                {menu.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}