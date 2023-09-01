import { Outlet } from 'react-router-dom';
import TheFooter from '../components/the/Footer';
import TheNavigation from '../components/the/Navigation';

export default function Root() {
  return (
    <div className="grid h-full grid-cols-4 grid-rows-1 gap-2 p-2">
      <aside className="flex flex-col gap-2">
        <TheNavigation />
        <div className="px-6 py-2 rounded-lg bg-dark-gray grow">Your Library</div>
      </aside>
      <main className="col-span-3 px-6 rounded-lg bg-dark-gray">
        <Outlet />
      </main>
      <TheFooter />
    </div>
  );
}
