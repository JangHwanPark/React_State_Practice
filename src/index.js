import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// 글로벌 경로 (루트 경로)
import App from "./App";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

// 루트 경로의 하위 경로
import Comment from "./pages/Comment/Comment";

// 새로운 경로
import Contact from "./pages/Contact/Contact";
import UseStatePage from "./pages/UseStatePage";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/comment", element: <Comment/>},
            {path: "/state", element: <UseStatePage/>}
        ]
    },
    {path: "contacts/:contactId", element: <Contact/>}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();