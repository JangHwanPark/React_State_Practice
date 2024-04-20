// redux/actions.js에 포함되어 있는 경우
// 액션 타입 상수 정의
// SET_POSTS: 포스트 목록을 설정하는 액션 타입
export const SET_POSTS = 'SET_POSTS';
// FILTER_POSTS: 주어진 필터 기준으로 포스트를 필터링하는 액션 타입
export const FILTER_POSTS = 'FILTER_POSTS';

// setPosts 액션 생성자
// posts: 포스트 목록을 payload로 전달받아 SET_POSTS 액션을 생성
export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
});

// filterPosts 액션 생성자
// filter: 필터링 조건을 문자열로 받아 FILTER_POSTS 액션을 생성
export const filterPosts = (filter) => ({
    type: FILTER_POSTS,
    payload: filter,
});