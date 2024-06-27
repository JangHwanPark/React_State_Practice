import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {users} from "../../api/users";

export default function Users() {
    /**
     * useQuery v5 부터 객체를 인자로 받는다.
     * useQuery 첫 번째 인자로 쿼리키, 두 번째 인자로 쿼리 함수를 받음
     *
     * queryKey: 쿼리를 식별하는 고유 키
     * queryFn: 쿼리를 실행하는 함수로 네트워크 요청을 실행하는 함수가 들어간다.
     *
     * data: 데이터 페칭 후 가져온 데이터
     * error: 데이터 페칭 중 발생한 오류
     * isLoading: 로딩 상태
     */
    const {data, error, isLoading} = useQuery({
        queryKey: ["data"],
        queryFn: users,
    })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    console.log(`data: ${data}`)
    console.log(`error: ${error}`)
    console.log(`isLoading: ${isLoading}`)

    return (
        <div>
            Users
            {data.map((data) => (
                <li key={data.id}>
                    {data.name}
                </li>
            ))}
        </div>
    );
}