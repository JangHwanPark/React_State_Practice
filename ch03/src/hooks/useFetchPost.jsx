import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {marked} from "marked";
import {setPosts} from "../store/actions/actions";

// 마크다운 파일에서 포스트 데이터를 가져와 Redux 스토어에 저장하는 커스텀 훅
export default function UseFetchPost() {
    // useDispatch 훅을 사용하여 Redux 스토어의 dispatch 함수를 가져옴
    const dispatch = useDispatch();

    useEffect(() => {
        // 마크다운 파일 목록을 가져오기 위해 Webpack의 require.context를 사용
        // '../posts' 디렉토리 내의 모든 '.md' 파일을 대상
        const markdownFile = require.context('../posts', true, /\.md$/);

        // 모든 마크다운 파일에 대해 비동기로 내용을 가져옴
        Promise.all(
            markdownFile.keys().map(file => {
                const markdown = markdownFile(file);

                // 각 마크다운 파일을 fetch하여 텍스트 형식으로 읽어옴
                return fetch(markdown)
                    .then(res => res.text())
                    .then((text) => ({
                        // 파일 경로에서 slug를 생성
                        slug: file.replace('./', '').replace('.md', ''),

                        // 첫 번째 줄에서 '#'를 제거하여 제목을 추출
                        title: text.split('\n')[0].replace('# ', ''),

                        // marked 라이브러리를 사용하여 마크다운을 HTML로 변환
                        content: marked(text),
                    }));
            })
        ).then((posts) => {
            dispatch(setPosts(posts)); // 가져온 포스트 데이터를 Redux 스토어에 저장
        });
    }, [dispatch]); // dispatch 함수가 변경될 경우에만 이 effect를 재실행
}