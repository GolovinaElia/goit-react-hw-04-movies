import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={style.itemLink}>
      <NavLink
        exact
        to={routes.home}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Home
      </NavLink>
      <NavLink
        to={routes.page}
        className="NavLink"
        activeClassName="NavLinkActive"
      >
        Movies
      </NavLink>
    </nav>
  );
};
export default Navigation;
