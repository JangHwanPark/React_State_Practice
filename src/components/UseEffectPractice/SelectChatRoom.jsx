import React, {useState} from 'react';
import ChatRoom from "./ChatRoom";

export default function SelectChatRoom() {
    const [roomId, setRoomId] = useState('일반');
    const [show, setShow] = useState(false);

    return (
        <>
            <label>
                채팅방을 선택하세요:{' '}
                <select value={roomId} onChange={e => setRoomId(e.target.value)}>
                    <option value="일반">general</option>
                    <option value="게임">travel</option>
                    <option value="음악">music</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)}>
                {show ? '나가기' : '접속하기'}
            </button>
            <div>
                {show && <hr/>}
                {show && <ChatRoom roomId={roomId}/>}
            </div>
        </>
    );
}