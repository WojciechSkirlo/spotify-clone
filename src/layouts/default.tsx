import { useState, useEffect, useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useStore } from '@/context';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import AuthService from '@/services/auth';
import { useUserStore } from '@/context/user';
import { useAuthStore } from '@/context/auth';
import { WebPlaybackSDK } from 'react-spotify-web-playback-sdk';
import Navigation from '@/layouts/partials/navigation';
import Header from '@/layouts/partials/header';
import Footer from '@/layouts/partials/footer';
import Cookies from 'js-cookie';

const DefaultLayout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isCollapsed = useStore((state) => state.isCollapsed);
  const accessToken = Cookies.get('access_token');
  const refreshToken = Cookies.get('refresh_token');
  const setUser = useUserStore((state) => state.setUser);
  const [alreadyFetched, getRefreshToken, setAccessToken, setRefreshToken] = useAuthStore((state) => [
    state.alreadyFetched,
    state.getRefreshToken,
    state.setAccessToken,
    state.setRefreshToken
  ]);
  const navigation = useNavigate();
  const getOAuthToken: Spotify.PlayerInit['getOAuthToken'] = useCallback(
    (cb: (token: string) => void) => cb(accessToken ?? ''),
    [accessToken]
  );

  useEffect(() => {
    const check = async () => {
      if (!refreshToken) navigation('/auth/login');
      else {
        try {
          if (!alreadyFetched) {
            const { access_token, refresh_token, expires_in } = await getRefreshToken(refreshToken);
            access_token && setAccessToken(access_token, expires_in);
            refresh_token && setRefreshToken(refresh_token, expires_in);
          }

          const user = await AuthService.getProfile();
          setUser(user);
          setIsLoaded(true);
        } catch (err) {
          console.log(err);
        }
      }
    };

    check();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToken]);

  if (!isLoaded) return <>Loading</>;

  return (
    <WebPlaybackSDK
      initialDeviceName="spotify-clone"
      connectOnInitialized={true}
      getOAuthToken={getOAuthToken}
      initialVolume={0.5}
    >
      <div className={`layout ${isCollapsed ? 'layout--collapsed' : ''}`}>
        <Navigation />
        <OverlayScrollbarsComponent
          options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 600 }, overflow: { x: 'hidden' } }}
          defer
          className="rounded-lg"
        >
          <div className="relative flex-1 min-h-full rounded-lg bg-cod-gray-500">
            <Header />
            <main>
              <Outlet />
            </main>
          </div>
        </OverlayScrollbarsComponent>
        <Footer />
      </div>
    </WebPlaybackSDK>
  );
};

export default DefaultLayout;
