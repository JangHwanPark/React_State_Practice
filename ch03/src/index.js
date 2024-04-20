import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LayoutPage from "./layout/LayoutPage";
import About from "./pages/About";
import Post from "./pages/Post";

const route = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/about", element: <About/>},
            {path: "/test", element: <LayoutPage/>},
            {path: "/posts/:postId", element: <Post/>},
            {path: "/test", element: <LayoutPage/>}
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('wrap'));
root.render(
    <React.StrictMode>
        <RouterProvider router={route}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();