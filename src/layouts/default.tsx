import { Outlet } from 'react-router-dom';
import TheFooter from '../components/the/Footer';
import TheNavigation from '../components/the/Navigation';

export default function Root() {
  return (
    <>
      <div>
        <TheNavigation />
        <div>
          <Outlet />
        </div>
      </div>
      <TheFooter />
    </>
  );
}
