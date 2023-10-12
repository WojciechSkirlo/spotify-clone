import { useState } from 'react';
import { useStore } from '@/context';
import NavButton from '@/layouts/partials/navigation/components/Button';
import Button from '~~/Button';
import Badge from '~~/Badge';
import Tooltip from '~~/Tooltip';
import Dropdown from '~~/Dropdown';
import Icon from '~~/Icon';
import ListItem from '@/layouts/partials/navigation/bottom/components/ListItem';

const sortingOptions = ['Ostatnie', 'Ostatnio dodane', 'Alfabetycznie', 'Twórca'];

const NavigationBottom = () => {
  const [isCollapsed, toggleMenu] = useStore((state) => [state.isCollapsed, state.toggleMenu]);
  const [sortingOption, setSortingOption] = useState(sortingOptions[0]);

  const actions = (
    <div className="flex items-center gap-2">
      <Button icon="plus" ariaLabel="Utwórz playlistę lub folder" scale={false} glow />
      <Button icon="arrow-right" ariaLabel="Pokaż więcej" scale={false} glow />
    </div>
  );

  const badges = (
    <div className="flex items-center gap-2 px-4 py-2">
      <Badge>Playlisty</Badge>
      <Badge>Wykonawcy</Badge>
      <Badge>Albumy</Badge>
    </div>
  );

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
        {!isCollapsed && actions}
      </div>
      {!isCollapsed && badges}
      <div className={`flex flex-col h-full gap-y-2 ${isCollapsed ? 'px-1' : 'px-2'}`}>
        {!isCollapsed && (
          <div className="flex items-center justify-between pt-0.5 px-2">
            <Button icon="library-search" glow />
            <Dropdown
              title="Sortuj wg"
              button={
                <button>
                  <div className="flex items-center pl-3 pr-1 ml-2 gap-x-2 text-white/[0.7]">
                    <span className="text-sm">Ostatnie</span>
                    <Icon name="caret-down" />
                  </div>
                </button>
              }
            >
              {sortingOptions.map((option) => (
                <Dropdown.Item key={option} onClick={() => setSortingOption(option)}>
                  <span>{option}</span>
                  {option === sortingOption && <Icon name="check" />}
                </Dropdown.Item>
              ))}
            </Dropdown>
          </div>
        )}
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
