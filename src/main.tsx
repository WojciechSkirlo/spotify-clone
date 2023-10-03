import React from 'react';
import { createRoot } from 'react-dom/client';
import { SWRConfig } from 'swr';
import { fetcher } from '@/api';
import App from '@/App';
import 'overlayscrollbars/overlayscrollbars.css';
import 'tippy.js/dist/tippy.css';
import '@/index.css';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
