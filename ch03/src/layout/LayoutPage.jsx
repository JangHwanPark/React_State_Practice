import React from 'react';
import { Link } from "react-router-dom";

export default function LayoutPage() {
    return (
        <div className="w-full min-h-screen flex flex-col mx-auto max-w-7xl">
            <header className="bg-blue-500 text-white p-4 flex justify-between items-center sm:px-6 lg:px-8">
                {/* 헤더 컨텐츠: 로고, 네비게이션 링크 등 */}
                <h1 className="text-lg font-bold">블로그 타이틀</h1>
                <nav>
                    <Link to="/" className="px-2 hover:text-gray-300">홈</Link>
                    <Link to="/about" className="px-2 hover:text-gray-300">소개</Link>
                    <Link to="/articles" className="px-2 hover:text-gray-300">게시글</Link>
                    <Link to="/contact" className="px-2 hover:text-gray-300">연락처</Link>
                </nav>
            </header>
            <div className="flex-grow grid grid-cols-4 gap-4 p-4 sm:px-6 lg:px-8">
                {/* 그리드 레이아웃: 사이드바와 메인 컨텐츠 */}
                <aside className="col-span-1 bg-gray-100 p-4">
                    {/* 사이드바: 검색, 최근 글, 광고 등 */}
                    <div className="mb-4">검색</div>
                    <div className="mb-4">최근 글</div>
                    <div>광고</div>
                </aside>
                <main className="col-span-3">
                    {/* 메인 컨텐츠: 글 목록이나 글 보기 */}
                    <article className="p-4 shadow-lg">
                        <h2 className="font-semibold text-xl mb-2">주요 기사 제목</h2>
                        <p>기사 내용...</p>
                    </article>
                </main>
            </div>
            <footer className="bg-gray-800 text-white p-4 text-center sm:px-6 lg:px-8">
                {/* 푸터: 저작권 정보, 연락처 정보 등 */}
                <p>© 2024 블로그 이름. All rights reserved.</p>
            </footer>
        </div>
    );
}