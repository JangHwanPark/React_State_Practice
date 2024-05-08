import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ButtonShowEvent from "./pages/ButtonShowEvent";
import Carousel from "./pages/Carousel";
import Accordion from "./pages/Accordion";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: "/accordion", element: <Accordion/>},
      {path: "/accordion", element: <Accordion/>},
      {path: "/button", element: <ButtonShowEvent/>},
      {path: "/carousel/:id", element: <Carousel/>},
      {path: "/posts/:slug", element: <PostDetail/>},
    ]
  }
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