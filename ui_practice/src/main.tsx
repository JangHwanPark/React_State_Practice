import ReactDOM from 'react-dom/client';
import './scss/index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "./App";

// Dom 설정
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement!);

// 리액트 쿼리 설정
const queryClient = new QueryClient();

// 리액트 라우트 설정
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    }
])

root.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}/>
    </QueryClientProvider>
);