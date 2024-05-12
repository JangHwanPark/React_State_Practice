import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from "./pages/Home";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ButtonShowEvent from "./pages/ButtonShowEvent";

// useState
import ArrayUseStatePage from "./pages/UseState/ArrayUseStatePage";
import LiftingStateUpPage from "./pages/UseState/LiftingStateUpPage";

// useEffect
import Carousel from "./pages/Carousel";
import Accordion from "./pages/Accordion";

// Mini Project
import PostList from "./pages/MiniProjects/Posts/PostList";
import PostDetail from "./pages/MiniProjects/Posts/PostDetail";
import BasicUseStatePage from "./pages/UseState/BasicUseStatePage";
import CreditCardPage from "./pages/MiniProjects/CreditCard/CreditCardPage";
import ObjectState from "./pages/ObjState/ObjectState";
import ArrayState from "./pages/ArrState/ArrayState";
import ImageCarousel from "./pages/MiniProjects/ImageCarousel/ImageCarousel";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
        // mini projects
      {path: "/mini-projects/posts", element: <PostList/>},
      {path: "/mini-projects/posts/:slug", element: <PostDetail/>},
      {path: "/mini-projects/credit-card", element: <CreditCardPage/>},
      {path: "/mini-projects/img-carousel", element: <ImageCarousel/>},
        // use-state
      {path: "/accordion", element: <Accordion/>},
      {path: "/use-state/basic", element: <BasicUseStatePage/>},
      {path: "/use-state/array", element: <ArrayUseStatePage/>},
      {path: "/use-state/lift-state-up", element: <LiftingStateUpPage/>},
      {path: "/use-state/object", element: <ObjectState/>},
      {path: "/use-state/array", element: <ArrayState/>},
        // use-effect
      {path: "/use-effect/button/toggle", element: <ButtonShowEvent/>},
      {path: "/use-effect/button/toggle", element: <ButtonShowEvent/>},
      {path: "/use-effect/carousel", element: <Carousel/>},
    ]
  }
])

const rootDom = document.getElementById('root')
const root = ReactDOM.createRoot(rootDom);
root.render(<RouterProvider router={router} />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();