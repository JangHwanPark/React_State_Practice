import React, {useMemo, useEffect, useState, useRef} from 'react';

export default function MemoExample01() {
    const [number, setNumber] = useState(1);
    const [isKorea, setIsKorea] = useState(true);
    const [isUpdate, setIsUpdate] = useState(true);

    const prevLocationRef = useRef();
    const prevLocationMemoRef = useRef();

    const location = {
        country: isKorea ? 'Korea' : 'USA',
    }

    // n 번 클릭시 n번 업데이트
    useEffect(() => {
        console.log('location: useEffect Mount');
        if (prevLocationRef.current !== location) {
            console.log('New location object created');
            prevLocationRef.current = location;
        }}, [location])

    const locationMemo = useMemo(() => {
        return {
            country: isUpdate ? 'Memo': 'isNotMemo',
        }}, [isUpdate])

    useEffect(() => {
        console.log('locationMemo: useEffect Mount');
        if (prevLocationMemoRef.current !== locationMemo) {
            console.log('New locationMemo object created');
            prevLocationMemoRef.current = locationMemo;
        }    }, [locationMemo])

    return (
        <header className="App-header">
            <h2>하루에 몇 끼 먹어요?</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <hr/>

            <h2>내가 있는 나라는?</h2>
            <p>나라: {location.country}</p>
            <button onClick={() => setIsKorea(!isKorea)}>Update</button>
            <button onClick={() => setIsUpdate(!isUpdate)}>MemoUpdate</button>
        </header>
    );
}