import { useStore } from '@/context';
import Tooltip from '~~/Tooltip';
import NavButton from '@/layouts/partials/navigation/components/Button';
import ListItem from '@/layouts/partials/navigation/bottom/components/ListItem';

const NavigationBottom = () => {
  const [isCollapsed, toggleMenu] = useStore((state) => [state.isCollapsed, state.toggleMenu]);

  return (
    <div className="flex flex-col flex-1 rounded-lg bg-cod-gray-500">
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <Tooltip text={isCollapsed ? 'Rozwiń Bibliotekę' : 'Zwiń Bibliotekę'} placement={isCollapsed ? 'right' : 'top'}>
          <NavButton
            icon="library"
            iconCollapsed="library-outline"
            name="Biblioteka"
            collapsed={isCollapsed}
            onClick={toggleMenu}
          />
        </Tooltip>
      </div>
      <div className={`flex flex-col h-full gap-y-2 ${isCollapsed ? 'px-1' : 'px-2'}`}>
        <div>
          <ListItem isCollapsed={isCollapsed} />
          <ListItem isCollapsed={isCollapsed} />
          <ListItem isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
};

export default NavigationBottom;
