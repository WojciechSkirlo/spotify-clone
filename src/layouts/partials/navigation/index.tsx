import Top from '@/layouts/partials/navigation/components/Top';
import Bottom from '@/layouts/partials/navigation/components/Bottom';

type NavigationProps = {
  isCollapsed: boolean;
};

const Navigation = ({ isCollapsed }: NavigationProps) => {
  return (
    <aside className={`grid ${isCollapsed ? 'w-[72px]' : 'w-[72px] md:w-[420px]'}`}>
      <nav className="flex flex-col gap-2">
        <Top />
        <Bottom />
      </nav>
    </aside>
  );
};

export default Navigation;
