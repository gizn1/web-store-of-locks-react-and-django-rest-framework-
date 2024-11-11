import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './components/page/main';
import PageCategory from './components/page/Category';
import KatalogPage from './components/page/Katalog';
import reportWebVitals from './reportWebVitals';
import CartGoods from './components/page/cartGoods';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <CartGoods/>,
  },
  {
    path: "/Katalog/:category",
    element: <KatalogPage/>,
  },
  {
    path: "/Category",
    element: <PageCategory/>,
  }
]);


root.render(
 
    <RouterProvider router={router} />
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
