import React from 'react';
import useOnlineStatus from "../hooks/useOnlineStatus";

export default function SaveButton() {
    const isOnline = useOnlineStatus();

    // 커스텀훅 상태를 사용하는 함수
    const handleSaveClick = () => {
        alert("✅ Progress saved");
    }

    return (
        <button disabled={!isOnline} onClick={handleSaveClick}>
            {isOnline ? "Save progress" : "Reconnecting..."}
        </button>
    );
}