import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LikeButton from './LikeButton';

describe('LikeButton Component', () => {
    test('좋아요 버튼 클릭 시 카운트가 증가함', () => {
        render(<LikeButton />);

        // 좋아요 버튼, 카운트를 보여주는 요소 찾기
        const likeButton = screen.getByRole('button');
        const countSpan = screen.getByText('0');

        // 버튼을 클릭
        fireEvent.click(likeButton);
        // 좋아요 상태에 따라 하트가 채워지는지 확인
        expect(likeButton).toContainElement(screen.getByTestId('filled-heart'));
        // 카운트가 1 증가했는지 확인
        expect(countSpan).toHaveTextContent('1');
    });

    test('좋아요 버튼을 다시 클릭 시 카운트가 감소함', () => {
        render(<LikeButton />);

        // 좋아요 버튼, 카운트를 보여주는 요소 찾기
        const likeButton = screen.getByRole('button');
        let countSpan = screen.getByText('0');

        // 버튼을 클릭하여 좋아요를 활성화
        fireEvent.click(likeButton);
        countSpan = screen.getByText('1'); // 카운트가 1로 업데이트되었는지 확인

        // 버튼을 다시 클릭하여 좋아요를 비활성화
        fireEvent.click(likeButton);
        countSpan = screen.getByText('0'); // 카운트가 다시 0으로 감소했는지 확인
        // 비활성화 상태에 따라 하트가 비워지는지 확인합니다.
        expect(likeButton).toContainElement(screen.getByTestId('empty-heart'));
    });
});