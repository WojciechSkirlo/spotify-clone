import { NavLink } from 'react-router-dom';

export default function TheNavigation() {
  return (
    <nav className="px-3 py-2 rounded-lg bg-dark-gray">
      <ul>
        <li className="px-3 py-1">
          <NavLink to="/">
            {({ isActive }) => (
              <div className="flex items-center h-10 gap-5">
                <i className={`text-xl ${isActive ? 'sp-home-icon' : 'sp-home-outline-icon'}`}></i>
                <span className="font-bold">Home</span>
              </div>
            )}
          </NavLink>
        </li>
        <li className="px-3 py-1">
          <NavLink to="/search">
            {({ isActive }) => (
              <div className="flex items-center h-10 gap-5">
                <i className={`text-xl ${isActive ? 'sp-search-icon' : 'sp-search-outline-icon'}`}></i>
                <span className="font-bold">Szukaj</span>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
