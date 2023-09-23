import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import 'overlayscrollbars/overlayscrollbars.css';
import 'tippy.js/dist/tippy.css';
import '@/index.css';

import DefaultLayout from '@/layouts/default';
import Home from '@/pages/home';
import Search from '@/pages/search';
import ErrorPage from '@/error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'search',
        element: <Search />
      }
    ]
  }
]);

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
