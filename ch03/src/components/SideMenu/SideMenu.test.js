import React from 'react';
import { render, screen } from '@testing-library/react';
import SideMenu from './SideMenu';

describe('SideMenu', () => {
    it('should render search, recent posts, and ads sections', () => {
        render(<SideMenu />);
        expect(screen.getByText('검색')).toBeInTheDocument();
        expect(screen.getByText('최근 글')).toBeInTheDocument();
        expect(screen.getByText('광고')).toBeInTheDocument();
    });
});