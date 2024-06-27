import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getFetchData} from "../../apis/getFetchData.ts";
import {FaRegCircleUser} from "react-icons/fa6";

export default function UserIcon() {
    // Hover 스타일 상태
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // 리액트 쿼리 사용
    const {data, error, isLoading} = useQuery({
        queryKey: ["users"],
        queryFn: getFetchData
    })
    
    // 로딩 및 에러처리 안하면 ts 에서 오류 발생 가능성 있음 (map 안돌아감)
    if (isLoading) return <div>로딩중</div>
    if (error) return <div>에러뜸: {error.message}</div>

    return (
        <div className="center">
            <div className="user-container">
                {data.slice(0, 5).map((user, index) => {
                    // 사용자 카드의 회전 각도 계산
                    const angle = index * 15 - 30;
                    const offsetX = index * 30 - 60; // X축으로 이동
                    const offsetY = Math.abs(index - 2) * 20; // Y축으로 이동

                    return (
                        <div
                            key={user.id}
                            className={`info-wrapper ${hoveredIndex === index ? 'hovered' : ''}`}
                            style={{
                                zIndex: 5 - index,
                                transform: `rotate(${angle}deg) translate(${offsetX}px, ${offsetY}px)` // transform 속성에 회전 및 이동 적용
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="icon-wrapper">
                                <FaRegCircleUser/>
                            </div>
                            <p className="user-name">{user.username}</p>
                            <p className="user-email">
                                <small>{user.email}</small>
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}