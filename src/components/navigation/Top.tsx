import { NavLink } from 'react-router-dom';

export default function NavigationTop() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <>
                <i className={isActive ? 'sp-home-icon' : 'sp-home-outline-icon'}></i>
                <span>Home</span>
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/search">
            {({ isActive }) => (
              <>
                <i className={isActive ? 'sp-search-icon' : 'sp-search-outline-icon'}></i>
                <span>Szukaj</span>
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
