import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/error-page';
import DefaultLayout from '@/layouts/default';
import Home from '@/pages/home';
import Search from '@/pages/search';
import Playlist from '@/pages/playlist';
import Album from '@/pages/album';

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
      },
      {
        path: 'playlist/:playlistId',
        element: <Playlist />
      },
      {
        path: 'album/:albumId',
        element: <Album />
      }
    ]
  }
]);

export default router;
