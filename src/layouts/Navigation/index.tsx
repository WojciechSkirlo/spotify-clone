import Top from '@/layouts/Navigation/Top';
import Bottom from '@/layouts/Navigation/Bottom';

const Navigation = () => {
  return (
    <aside className="grid">
      <nav className="flex flex-col gap-2">
        <Top />
        <Bottom />
      </nav>
    </aside>
  );
};

export default Navigation;
