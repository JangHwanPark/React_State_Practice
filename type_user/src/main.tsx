// import lib
import React from 'react';
import { createRoot } from 'react-dom/client'; // 명명된 내보내기 사용
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import components
import App from '../src/components/pages/App.tsx';
import Home from '../src/components/pages/Home.tsx';
import PostPage from "./components/pages/PostPage.tsx";

// import css
import './scss/index.scss';

// Dom 설정
const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement); // createRoot 사용

// 리액트 쿼리 설정
const queryClient = new QueryClient();

// 리액트 라우트 설정
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {index: true, element: <Home/>},
            {path: "/posts", element: <PostPage/>}
        ]
    },
]);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);