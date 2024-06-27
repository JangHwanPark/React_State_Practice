import React, {useEffect, useRef, useState} from 'react';
import {FaCaretDown} from "react-icons/fa";

export default function Select() {
    // 셀렉트 박스 상태 관리
    const [isOpen, setIsOpen] = useState(false);

    /**
     * 클릭 이벤트가 발생했을때 클릭한 요소가 셀렉트박스 내부에 있는지,
     * 외부에있는지 확인하기 위해 useRef 사용 (직접 DOM에 접근해 이벤트 타겟과 비교)
     */
    const selectRef = useRef(null);

    // 셀렉트 박스 상태 변경 함수
    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }

    // 셀렉트 박스 외부 클릭시 상태 변경 함수
    const handleClickOutside = (e) => {
        if (selectRef.current && !selectRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    }

    /**
     * 컴포넌트 생애주기를 활용하기 위해 useEffect 훅을 사용한다.
     * useEffect 를 사용하여 직접 DOM 에 접근하여 컴포넌트 마운트시
     * mosedown 이벤트 리스너를 문서에 추가하고 이벤트가 발생될 때마다 호출된다.
     */
    useEffect(() => {
        // 리스너 함수인 handleClickOutside는 클릭이 셀렉트 박스 외부에서 발생했는지 확인한다.
        document.addEventListener('mousedown', handleClickOutside);

        /**
         * 컴포넌트가 언마운트될 때 호출되며, 이벤트 리스너를 제거한다.
         * 리스너를 제거하지 않을경우 언마운트 이후에도 리스너가 남아있기 때문에
         * 메모리 누수나 필요없는 함수가 호출될 수 있다.
         */
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="select" ref={selectRef}>
            <button className="select-btn" onClick={handleIsOpen}>
                <span>프로그래밍 언어</span>
                <span><FaCaretDown/></span>
            </button>
            {/* 메뉴 오픈시 출력 */}
            {isOpen && (
                <ul className="select-menu">
                    <li className="select-item">
                    <button>자바</button>
                    </li>
                    <li className="select-item">
                        <button>자바스크립트</button>
                    </li>
                    <li className="select-item">
                        <button>C</button>
                    </li>
                    <li className="select-item">
                        <button>C++</button>
                    </li>
                    <li className="select-item">
                        <button>파이썬</button>
                    </li>
                </ul>
            )}
        </div>
    );
}