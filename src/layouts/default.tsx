import { Outlet } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import Navigation from '@/layouts/Navigation';

const DefaultLayout = () => {
  return (
    <div className="layout">
      <Navigation />
      <main className="px-6 rounded-lg bg-dark-gray">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
