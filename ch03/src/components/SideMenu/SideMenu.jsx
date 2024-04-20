import React from 'react';

export default function SideMenu() {
    // col-span-1 row-span-5: 가로 1칸 세로 5칸
    return (
        <aside className="h-full col-span-1 row-span-5 bg-gray-100 p-4">
            <div className="mb-4">최근 글</div>
        </aside>
    );
}