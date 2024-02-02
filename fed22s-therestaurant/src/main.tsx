import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error } from './components/Error';
import { StartPage } from './components/pages/StartPage';
import { MenuPage } from './components/pages/MenuPage';
import { BookingPage } from './components/pages/BookingPage';
import { AdminPage } from './components/pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <StartPage></StartPage>,
    errorElement: <Error></Error>,
  },
  {
    path: '/meny',
    element: <MenuPage></MenuPage>,
  },
  {
    path: '/bokabord',
    element: <BookingPage></BookingPage>,
    errorElement: <Error></Error>,
  },
  {
    path: '/admin',
    element: <AdminPage></AdminPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
