import React from 'react';

interface PaginationProps {
    totalPage: number;
    limit: number;
    page: number;
    setPage: () => void;
}

export default function Pagination<PaginationProps>(
    {
        totalPage,
        limit,
        page,
        setPage
    }
) {
    return (
        <div>
            
        </div>
    );
}