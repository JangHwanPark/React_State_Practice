import React, {useEffect, useState} from 'react';
import {createConnection} from "../../service/chat";

export default function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');
    
    // useEffect(콜백함수, 종속성 배열);
    useEffect(() => {
        // ChatRoom 컴포넌트 마운트시 실행
        // 채팅 서버에 연결되는 설정 코드 (연결시 connect 함수 실행)
        const connection = createConnection(serverUrl, roomId);
        connection.connect();

        // ChatRoom 컴포넌트 언마운트시(컴포넌트가 둠에서 제거될때)실행
        // 채팅 서버와 연결을 끊는 코드 (disconnect 함수를 반환)
        return () => connection.disconnect();

        // roomId, serverUrl 상태가 업데이트 될때마다
        // useEffect Hook 이 실행됨
    }, [roomId, serverUrl]);
    return (
        <div>
            <label htmlFor="">
                Server URL :{' '}
                <input
                    type="text"
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                />
            </label>
            <h1>{roomId}방에 입장하셨습니다.</h1>
        </div>
    );
}