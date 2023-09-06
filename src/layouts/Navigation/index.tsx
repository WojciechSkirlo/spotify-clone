import NavigationTop from '@/layouts/Navigation/NavigationTop';
import NavigationBottom from '@/layouts/Navigation/NavigationBottom';

const Navigation = () => {
  return (
    <aside className="grid">
      <nav className="flex flex-col gap-2">
        <NavigationTop />
        <NavigationBottom />
      </nav>
    </aside>
  );
};

export default Navigation;
