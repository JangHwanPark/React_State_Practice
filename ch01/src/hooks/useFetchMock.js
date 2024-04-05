import {useEffect, useState} from "react";

export default function useFetchMock(mockData) {
    const [data, setData] = useState(null);

    // mockData가 변경될 때마다 useEffect가 다시 실행
    useEffect(() => {
        // 시스템에 연결되는 설정코드 작성
        setData(mockData);
        
        // return () => {위 시스템과 연결을 끊는 정리코드?가 포함된 정리함수를 반환}
        
        // deps - 종속성 목록
        // 빈 배열 : 컴포넌트 랜더링시 최초 1번만 실행
        // 값이 있을경우 (mockData) : mockData가 렌더링될 때마다 useEffect가 수행됨
    }, [mockData]);

    return data;
}