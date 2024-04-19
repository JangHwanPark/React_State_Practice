import React from 'react';
import { render, screen } from '@testing-library/react';
import PostsList from './PostsList';

describe('PostsList', () => {
    it('renders PostsList component', () => {
        render(<PostsList />);
        expect(screen.getByText(/주요 기사 제목/)).toBeInTheDocument();
        expect(screen.getByText('기사 내용...')).toBeInTheDocument();
    });
});