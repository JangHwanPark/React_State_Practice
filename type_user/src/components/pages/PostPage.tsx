import React, {useState, useEffect} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getPostsData, Post} from "../../apis/getFetchData.ts";
import Pagination from "../common/Pagination.tsx";

export default function PostPage() {
    // 페이지 네이션 상태 관리
    const [page, setPage] = useState(1);
    
    // useQuery 를 사용한 데이터 패칭
    const {
        data,
        error,
        isLoading,
        isFetching
    } = useQuery<Post[], Error>({
        queryKey: ["post"],
        queryFn: getPostsData,
    })
    
    // 에러 및 로딩 처리
    if (isLoading) return <div>로딩중</div>
    if (error) alert("데이터를 불러오지 못했습니다.");
    console.log(data)


    // 페이지 네이션 함수
    const handlePageChange = (page) => {
        setPage(page)
    }

    // Todo
    return (
        <div className="container">
            <h1>게시글 목록</h1>
            
            {/* 데이터 패칭 */}
            {data.map(post => (
                <div key={post.id}>
                    {post.title}
                </div>
            ))}


            {/* 페이지 네이션 구현 */}
            <Pagination/>
        </div>
    );
}