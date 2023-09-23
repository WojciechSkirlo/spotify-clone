import { Outlet } from 'react-router-dom';
import { useStore } from '@/context';
import Navigation from '@/layouts/partials/navigation';
import Header from '@/layouts/partials/Header';
import Footer from '@/layouts/partials/footer';

const DefaultLayout = () => {
  const isCollapsed = useStore((state) => state.isCollapsed);

  return (
    <div className={`layout ${isCollapsed ? 'layout--collapsed' : ''}`}>
      <Navigation />
      <div className="relative overflow-hidden rounded-lg bg-cod-gray-500">
        <Header />
        <main className="px-6 max-w-[1955px] py-2">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
