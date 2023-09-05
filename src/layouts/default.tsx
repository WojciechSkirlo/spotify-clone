import { Outlet } from 'react-router-dom';
import Footer from '@/layouts/Footer';
import Navigation from '@/layouts/Navigation';

const Root = () => {
  return (
    <div className="grid h-full grid-cols-4 grid-rows-1 gap-2 p-2 2xl:grid-cols-5">
      <aside className="flex flex-col gap-2">
        <Navigation />
        <div className="px-6 py-2 rounded-lg bg-dark-gray grow">Your Library</div>
      </aside>
      <main className="col-span-3 px-6 rounded-lg 2xl:col-span-4 bg-dark-gray">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
