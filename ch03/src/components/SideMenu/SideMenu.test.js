import React from 'react';
import { render, screen } from '@testing-library/react';
import SideMenu from './SideMenu';

describe('SideMenu', () => {
    it('should render with the col-span-1 class', () => {
        render(<SideMenu />);
        const sideMenuElement = screen.getByText('검색').closest('aside');
        expect(sideMenuElement).toHaveClass('col-span-1');
        expect(screen.getByText('검색')).toBeInTheDocument();
        expect(screen.getByText('최근 글')).toBeInTheDocument();
        expect(screen.getByText('광고')).toBeInTheDocument();
    });
});