import { useStore } from '@/context';
import Item from '@/layouts/Navigation/Item';

const NavigationTop = () => {
  const isCollapsed = useStore((state) => state.isCollapsed);

  return (
    <div className="px-3 py-2 rounded-lg bg-dark-gray">
      <ul>
        <Item to="/" name="Home" icon="home-outline" iconActive="home" collapsed={isCollapsed} />
        <Item to="/search" name="Szukaj" icon="search-outline" iconActive="search" collapsed={isCollapsed} />
      </ul>
    </div>
  );
};

export default NavigationTop;
