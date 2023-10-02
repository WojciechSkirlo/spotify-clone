import { useStore } from '@/context';
import { Outlet } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import Navigation from '@/layouts/partials/navigation';
import Header from '@/layouts/partials/header';
import Footer from '@/layouts/partials/footer';
import { useEffect } from 'react';
import { api } from '@/api';
import Cookies from 'js-cookie';

const DefaultLayout = () => {
  const isCollapsed = useStore((state) => state.isCollapsed);

  const setToken = (token: string) => {
    Cookies.set('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  const getToken = () => {
    const token = Cookies.get('token');
    return token;
  };

  useEffect(() => {
    const getToken = async () => {
      const result = await api.post(
        '/token',
        {
          grant_type: 'client_credentials',
          client_id: '99a27f694ea640c6945525e310487586',
          client_secret: '28e661e630964673b671afceb3b581c2'
        },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      );

      const token = result.data.access_token;
      setToken(token);

      console.log('result', result.data);
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
        <div className="relative flex-1 rounded-lg bg-cod-gray-500">
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
