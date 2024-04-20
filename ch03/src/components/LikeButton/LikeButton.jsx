import React, {useEffect, useState} from 'react';
import {GoHeart, GoHeartFill} from "react-icons/go";

export default function LikeButton() {
    // 좋아요 버튼 초기 상태 = false
    const [like, setLike] = useState(false);

    // 좋아요 카운트 상태
    const [cnt, setCnt] = useState(0);
    
    // 현재 like 상태 반대로 토글
    const handleClickLike = () => {
        setLike(!like)
        console.log(like)
    }

    // like 상태가 변경될 때마다 cnt를 업데이트
    useEffect(() => {
        // 좋아요 상태가 true일 때 카운트 증가, false일 때 카운트 감소
        if (like) setCnt(cnt + 1);

        // 좋아요를 취소하는 경우, cnt가 0보다 클 때만 감소
        else if (cnt > 0) setCnt(cnt - 1);
    }, [like]);

    return (
        <button className={'ml-auto flex items-center gap-1 cursor-pointer'} onClick={handleClickLike}>
            <span>{like ? <GoHeartFill/> : <GoHeart/>}</span>
            <span>{cnt}</span>
        </button>
    );
}