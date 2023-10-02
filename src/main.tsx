import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import router from '@/router';
import { SWRConfig } from 'swr';
import { fetcher } from '@/api';
import 'overlayscrollbars/overlayscrollbars.css';
import 'tippy.js/dist/tippy.css';
import '@/index.css';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  // <React.StrictMode>
  <SWRConfig
    value={{
      fetcher
    }}
  >
    <RouterProvider router={router} />
  </SWRConfig>
  // </React.StrictMode>
);
