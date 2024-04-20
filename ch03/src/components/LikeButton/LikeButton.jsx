import React, {useState} from 'react';
import {GoHeart, GoHeartFill} from "react-icons/go";

export default function LikeButton() {
    // 좋아요 버튼 초기 상태 = false
    const [like, setLike] = useState(false);
    
    // 현재 like 상태 반대로 토글
    const handleClickLike = () => {
        setLike(!like)
        console.log(like)
    }

    // Todo: cnt 생성
    return (
        <button className={'cursor-pointer'} onClick={handleClickLike}>
            {like ?  <GoHeartFill/> : <GoHeart />}
        </button>
    );
}