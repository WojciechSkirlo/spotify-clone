import { useStore } from '@/context';
import { Outlet } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { api } from '@/api';
import AuthService from '@/services/auth';
import Cookies from 'js-cookie';
import Navigation from '@/layouts/partials/navigation';
import Header from '@/layouts/partials/header';
import Footer from '@/layouts/partials/footer';
import { useEffect } from 'react';

const DefaultLayout = () => {
  const isCollapsed = useStore((state) => state.isCollapsed);

  const setToken = (token: string) => {
    Cookies.set('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  useEffect(() => {
    const getToken = async () => {
      const token = await AuthService.getToken();
      setToken(token.access_token);
    };

    getToken();
  }, []);

  return (
    <div className={`layout ${isCollapsed ? 'layout--collapsed' : ''}`}>
      <Navigation />
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 600 }, overflow: { x: 'hidden' } }}
        defer
        className="rounded-lg"
      >
        <div className="relative flex-1 min-h-full rounded-lg bg-cod-gray-500">
          <Header />
          <main className="max-w-[1955px]">
            <Outlet />
          </main>
        </div>
      </OverlayScrollbarsComponent>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
