import { useState } from 'react';
import { useStore } from '@/context';
import NavButton from '@/layouts/partials/navigation/components/Button';
import Button from '~~/Button';
import Badge from '~~/Badge';
import Tooltip from '~~/Tooltip';
import { Dropdown, DropdownItem } from '~~/Dropdown';
import Icon from '~~/Icon';

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
      <div className="flex flex-col h-full px-2">
        <div className="flex items-center justify-between pt-0.5 px-2">
          <Button icon="library-search" glow />
          <Dropdown
            title="Sortuj wg"
            button={
              <Button>
                <div className="flex items-center pl-3 pr-2 ml-2 gap-x-2">
                  <span>Ostatnie</span>
                  <Icon name="caret-down" />
                </div>
              </Button>
            }
          >
            {sortingOptions.map((option) => (
              <DropdownItem onClick={() => setSortingOption(option)}>
                <span>{option}</span>
                {option === sortingOption && <Icon name="check" />}
              </DropdownItem>
            ))}
          </Dropdown>
        </div>
        <div className="grow"></div>
      </div>
    </div>
  );
};

export default NavigationBottom;
