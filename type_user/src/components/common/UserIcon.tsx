import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getFetchData} from "../../apis/getFetchData.ts";
import {FaRegCircleUser} from "react-icons/fa6";

export default function UserIcon() {
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
                {data.slice(0, 5).map(user => (
                    <div key={user.id} className="info-wrapper">
                        <div className="icon-wrapper">
                            <FaRegCircleUser/>
                        </div>
                        <p className="user-name">{user.username}</p>
                        <p className="user-email">
                            <small>{user.email}</small>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}