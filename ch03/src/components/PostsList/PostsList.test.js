import React from 'react';
import { render, screen } from '@testing-library/react';
import PostsList from './PostsList';

describe('PostsList', () => {
    it('renders PostsList component with correct classes', () => {
        render(<PostsList />);
        const postsListElement = screen.getByText(/주요 기사 제목/).closest('article');
        expect(postsListElement).toHaveClass('col-span-3');
        expect(postsListElement).toHaveTextContent('주요 기사 제목');
        expect(postsListElement).toHaveTextContent('기사 내용...');
    });
});