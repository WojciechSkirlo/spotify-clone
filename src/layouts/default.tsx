import { Outlet } from 'react-router-dom';
import { useStore } from '@/context';
import Footer from '@/layouts/Footer';
import Navigation from '@/layouts/Navigation';

const DefaultLayout = () => {
  const isCollapsed = useStore((state) => state.isCollapsed);

  return (
    <div className={`layout ${isCollapsed ? 'layout--collapsed' : ''}`}>
      <Navigation />
      <main className="px-6 rounded-lg bg-cod-gray-500">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
