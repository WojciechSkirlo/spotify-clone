import Top from '@/layouts/partials/navigation/Top';
import Bottom from '@/layouts/partials/navigation/Bottom';

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
