import { useStore } from '@/context';
import useSWR from 'swr';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import NavButton from '@/layouts/partials/navigation/components/Button';
import ListItem from '@/layouts/partials/navigation/bottom/components/ListItem';
import Tooltip from '~~/Tooltip';

const NavigationBottom = () => {
  const [isCollapsed, toggleMenu] = useStore((state) => [state.isCollapsed, state.toggleMenu]);
  const { data, error, isLoading } = useSWR<Playlists>(`/me/playlists?limit=10`);

  if (isLoading) return <>Loading...</>;
  if (error || data === undefined) return <>Error :/</>;

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
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'leave', autoHideDelay: 600 }, overflow: { x: 'hidden' } }}
        defer
        style={{ height: 'calc(100vh - 272px)' }}
      >
        <div className={`flex flex-col gap-y-2 ${isCollapsed ? 'px-1' : 'px-1 md:px-2'}`}>
          {data.items.map((item) => (
            <ListItem
              isCollapsed={isCollapsed}
              key={item.id}
              img={item.images?.[0]?.url}
              name={item.name}
              link={`/playlist/${item.id}`}
              type={item.type}
              owner={item.owner.display_name}
            />
          ))}
          {data.items.length === 0 && <span className="ml-3 text-sm truncate text-silver-chalice">Brak playlist</span>}
        </div>
      </OverlayScrollbarsComponent>
    </div>
  );
};

export default NavigationBottom;
