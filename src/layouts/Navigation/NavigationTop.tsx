import NavItem from '@/layouts/Navigation/NavItem';

const NavigationTop = () => {
  return (
    <div className="px-3 py-2 rounded-lg bg-dark-gray">
      <ul>
        <NavItem to="/" name="Home" icon="home" iconActive="home-outline" />
        <NavItem to="/search" name="Szukaj" icon="search-filled" iconActive="search" />
      </ul>
    </div>
  );
};

export default NavigationTop;
