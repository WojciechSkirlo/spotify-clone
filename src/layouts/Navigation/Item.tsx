import { NavLink } from 'react-router-dom';
import Icon from '~~/Icon';

type NavItemProps = {
  to: string;
  name: string;
  icon: string;
  iconActive: string;
  collapsed?: boolean;
};

const NavItem = ({ to, name, icon, iconActive, collapsed }: NavItemProps) => {
  return (
    <li className="px-3 py-1">
      <NavLink to={to}>
        {({ isActive }) => (
          <div
            className={`flex items-center transition-colors duration-200 h-10 gap-5 hover:text-white ${
              isActive ? 'text-white' : 'text-subtle'
            }`}
          >
            <Icon name={isActive ? iconActive : icon} size="lg" />
            {!collapsed && <span className="font-bold">{name}</span>}
          </div>
        )}
      </NavLink>
    </li>
  );
};

export default NavItem;
