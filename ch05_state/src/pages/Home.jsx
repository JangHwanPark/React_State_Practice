import React from 'react';
import {Link} from "react-router-dom";

/* Link 렌더링 정보 배열 */
const HOME_PATH = [
    {
        title: "Mini Project Home",
        children: [
            {title: "Credit Card", path: "mini-projects/credit-card"},
            {title: "PostList", path: "/mini-projects/posts"},
            {title: "ImageCarousel", path: "/mini-projects/img-carousel"}
        ]
    },
    {
        title: "useState",
        children: [
            {title: "BasicUseStatePage", path: "/use-state/basic"},
            {title: "ArrayUseStatePage", path: "/use-state/array"},
            {title: "LiftingStateUpPage", path: "/use-state/lift-state-up"}
        ]
    },
    {
        title: "객체 배열 상태관리",
        children: [
            {title: "객체 상태 관리 연습", path: "/use-state/object"},
            {title: "배열 상태 관리 연습", path: "/use-state/array"},
            {title: "LiftingStateUpPage", path: "/use-state/lift-state-up"}
        ]
    },
    {
        title: "이전 상태 관리",
        children: [
            {title: "BasicUseStatePage", path: "/use-state/basic"},
            {title: "ArrayUseStatePage", path: "/use-state/array"},
            {title: "LiftingStateUpPage", path: "/use-state/lift-state-up"}
        ]
    },
    {
        title: "useEffect",
        children: [
            {title: "ButtonShowEvent", path: "/use-effect/button/toggle"},
            {title: "Carousel", path: "/use-effect/carousel"}
        ]
    },
]

export default function Home() {
    const renderSectionPage = (section) => (
        <section key={section.title} className={'section col-span-12'}>
            <h2 className={'mb-3'}>{section.title}</h2>
            <div className={'grid grid-cols-5 gap-3'}>
                {section.children.map((child) => (
                    <Link
                        key={child.path}
                        className={'col-span-1 text-center border-b border-black'}
                        to={child.path}
                    >{child.title}
                    </Link>
                ))}
            </div>
        </section>
    )

    return <>{HOME_PATH.map(renderSectionPage)}</>
}