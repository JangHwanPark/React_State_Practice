import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Components from "./pages/Components";

// Set Routing
const route = createBrowserRouter([
    {
        // 웹 내부 컴포넌트의 레이아웃, 공통요소 = App
        path: "/",
        element: <App />,

        // 하위 경로
        children: [
            {index:true, element: <Home/>}, // children 의 기본 경로
            {path: "/products", element: <Products/>},
            {path: "/search", element: <Search/>},
            {path: "/components", element: <Components/>},
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();