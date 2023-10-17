import { Outlet } from 'react-router-dom';
import { useStore } from '@/context';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import Auth from '@/layouts/partials/Auth';
import Navigation from '@/layouts/partials/navigation';
import Header from '@/layouts/partials/header';
import Footer from '@/layouts/partials/footer';

const DefaultLayout = () => {
  const isCollapsed = useStore((state) => state.isCollapsed);

  return (
    <Auth>
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
    </Auth>
  );
};

export default DefaultLayout;
