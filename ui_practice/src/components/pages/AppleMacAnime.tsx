import React, { useEffect, useRef, useState } from 'react';
import mac_air01 from "../../assets/img/mac_air01.png";
import mac_air02 from "../../assets/img/mac_air02.png";
import mac_air03 from "../../assets/img/mac_air03.png";

export default function AppleMacAnime() {
    // imgContainerRef: 이미지 컨테이너 요소를 참조하기 위한 useRef
    const imgContainerRef = useRef(null);

    // 첫 번째 이미지를 참조하기 위한 useRef
    const firstImageRef = useRef(null);

    // currentImageIndex: 현재 표시되고 있는 이미지의 인덱스를 관리하는 상태 변수
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // scrollPosition: 현재 스크롤 위치를 관리하는 상태 변수
    const [scrollPosition, setScrollPosition] = useState(0);

    // images: 표시할 이미지 배열
    const images = [mac_air01, mac_air02, mac_air03];

    useEffect(() => {
        // 스크롤 이벤트 핸들러
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
            let y = (-1/400) * scrollPosition + 115/50;

            // 첫 번째 이미지의 opacity 를 업데이트
            if (firstImageRef.current) {
                firstImageRef.current.style.opacity = y;
            }
        };

        // 스크롤 이벤트 리스너
        window.addEventListener('scroll', handleScroll);
        
        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    console.log(`Current Scroll Position: ${scrollPosition}px`)
    return (
        <div className="air-container">
            {/* 이미지 컨테이너 */}
            <div className="img-container" ref={imgContainerRef}>
                {/* 이미지 배열을 순회하며 각 이미지를 렌더링 */}
                {images.map((image, index) => (
                    <div className="img-wrapper">
                        <img
                            key={index}
                            src={image}
                            alt={`Mac Air ${index + 1}`}
                            className={`img ${index === currentImageIndex ? 'visible' : ''}`}
                        />
                    </div>
                ))}

                {/* 텍스트 컨테이너 */}
                <div className="text-container">
                    <h1>날렵하게. 강력하게. M3답게.</h1>
                    <p>
                        세상에서 가장 사랑받는 노트북 MacBook Air가 M3 칩과 만나 한층 강력해졌습니다.<br/>
                        일부터 놀이까지, 무엇이든 가뿐하죠. 최대 18시간의 배터리 사용 시간과 극강의 휴대성을<br/>
                        자랑하는 MacBook Air와 함께라면 어디서든, 어떤 일이든 너끈히 해낼 수 있습니다.
                    </p>
                    <p>New M3 칩 탑재 MacBook Air ₩1,590,000부터</p>
                    <p>M2 칩 탑재 MacBook Air ₩1,390,000부터</p>
                </div>
            </div>
        </div>
    );
}