import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '@/error-page';
import DefaultLayout from '@/layouts/default';
import HomePage from '@/pages/home';
import SearchPage from '@/pages/search';
import PlaylistPage from '@/pages/playlist';
import AlbumPage from '@/pages/album';
import TrackPage from '@/pages/track';
import ArtistPage from '@/pages/artist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'search',
        element: <SearchPage />
      },
      {
        path: 'playlist/:playlistId',
        element: <PlaylistPage />
      },
      {
        path: 'album/:albumId',
        element: <AlbumPage />
      },
      {
        path: 'track/:trackId',
        element: <TrackPage />
      },
      {
        path: 'artist/:artistId',
        element: <ArtistPage />
      }
    ]
  }
]);

export default router;
