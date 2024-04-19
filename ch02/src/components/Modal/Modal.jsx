import React from 'react';

export default function Modal({ handleClose, show, children }) {
    const showHideClassName = show
        ? "fixed inset-0 z-40 overflow-auto flex"
        : "hidden";

    // 모달 콘텐츠 이외의 부분을 클릭했을 때 닫히는 기능
    const handleOverlayClick = (e) => {
        if (e.target.id === "modal-backdrop") {
            handleClose();
        }
    };

    return (
        <div className={showHideClassName} onClick={handleOverlayClick} id="modal-backdrop">
            {/* 배경을 어둡게 만드는 overlay와 배경 클릭시 모달 종료 이벤트 핸들러 */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-40" onClick={handleClose}></div>

            {/* 모달 내용을 클릭했을 때 이벤트 버블링 방지 */}
            <section
                className="m-auto bg-white rounded shadow-lg p-6 z-50 "
                onClick={(e) => e.stopPropagation()}
            >
                {children}
                <button
                    type="button"
                    onClick={handleClose}
                    className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
                >
                    닫기
                </button>
            </section>
        </div>
    );
}