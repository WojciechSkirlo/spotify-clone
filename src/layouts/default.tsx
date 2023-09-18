import { Outlet } from 'react-router-dom';
import { useStore } from '@/context';
import Footer from '@/layouts/Footer';
import Navigation from '@/layouts/Navigation';
import IconButton from '~~/IconButton';

const DefaultLayout = () => {
  const isCollapsed = useStore((state) => state.isCollapsed);

  return (
    <div className={`layout ${isCollapsed ? 'layout--collapsed' : ''}`}>
      <Navigation />
      <div className="rounded-lg bg-cod-gray-500">
        <div className="flex items-center justify-between w-full h-16 px-6">
          <div className="flex gap-2">
            <IconButton icon="chevron-left" variant="tertiary" scale={false} ariaLabel="Wstecz" />
            <IconButton icon="chevron-right" variant="tertiary" scale={false} ariaLabel="Dalej" />
          </div>
          <div className="flex gap-2">
            <IconButton icon="bell" variant="secondary" ariaLabel="Nowości" />
            <IconButton icon="volume" variant="secondary" ariaLabel="Jaa">
              <img
                src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1853828564884255&height=50&width=50&ext=1697615769&hash=AeSS139Pv-6jsIgmjQg"
                alt="profile-pic"
                className="object-cover w-full h-full rounded-full"
              />
            </IconButton>
          </div>
        </div>
        <main className="px-6 max-w-[1955px] py-2">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
