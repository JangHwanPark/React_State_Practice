import {useEffect, useState} from "react";

export default function useFetchMock(mockData) {
    const [data, setData] = useState(null);

    // mockData가 변경될 때마다 useEffect가 다시 실행
    useEffect(() => {
        setData(mockData);
    }, [mockData]);

    return data;
}