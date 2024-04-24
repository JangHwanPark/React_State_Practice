import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouteObject, RouterProps, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import type {Router as RemixRouter} from "@remix-run/router/dist/router";

const root =  document.getElementById('root') as HTMLElement;
const connectRoot = ReactDOM.createRoot(root) as ReactDOM.Root;

const router: RemixRouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index:true, element: <Home/>},
        ]
    }
])

connectRoot.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();