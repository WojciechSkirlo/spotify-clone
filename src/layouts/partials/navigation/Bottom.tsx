import { useStore } from '@/context';
import Button from '@/layouts/partials/navigation/Button';
import IconButton from '~~/IconButton';
import Badge from '~~/Badge';
import Tooltip from '~~/Tooltip';

const NavigationBottom = () => {
  const [isCollapsed, toggleMenu] = useStore((state) => [state.isCollapsed, state.toggleMenu]);

  return (
    <div className="flex flex-col flex-1 rounded-lg bg-cod-gray-500">
      <div className="flex items-center justify-between gap-2 px-4 py-2">
        <Tooltip text={isCollapsed ? 'Rozwiń Bibliotekę' : 'Zwiń Bibliotekę'} placement={isCollapsed ? 'right' : 'top'}>
          <Button
            icon="library"
            iconCollapsed="library-outline"
            name="Biblioteka"
            collapsed={isCollapsed}
            onClick={toggleMenu}
          />
        </Tooltip>
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <IconButton icon="plus" ariaLabel="Utwórz playlistę lub folder" scale={false} glow />
            <IconButton icon="arrow-right" ariaLabel="Pokaż więcej" scale={false} glow />
          </div>
        )}
      </div>
      {!isCollapsed && (
        <div className="flex items-center gap-2 px-4 py-2">
          <Badge>Playlisty</Badge>
          <Badge>Wykonawcy</Badge>
          <Badge>Albumy</Badge>
        </div>
      )}
    </div>
  );
};

export default NavigationBottom;
