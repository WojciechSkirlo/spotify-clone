import { createBrowserRouter, redirect } from 'react-router-dom';
import DefaultLayout from '@/layouts/default';
import AuthLayout from '@/layouts/auth';
import AuthLoginPage from '@/pages/auth/login';
import AuthCallbackPage from '@/pages/auth/callback';
import HomePage from '@/pages/home';
import SearchPage from '@/pages/search';
import PlaylistPage from '@/pages/playlist';
import AlbumPage from '@/pages/album';
import TrackPage from '@/pages/track';
import ArtistPage from '@/pages/artist';
import UserPage from '@/pages/user';
import EpisodePage from '@/pages/eposide';
import ShowPage from '@/pages/show';
import ErrorPage from '@/error-page';

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
      },
      {
        path: 'user/:userId',
        element: <UserPage />
      },
      {
        path: 'episode/:episodeId',
        element: <EpisodePage />
      },
      {
        path: 'show/:showId',
        element: <ShowPage />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => redirect('/auth/login')
      },
      {
        path: 'login',
        element: <AuthLoginPage />
      },
      {
        path: 'callback',
        element: <AuthCallbackPage />
      }
    ]
  }
]);

export default router;
