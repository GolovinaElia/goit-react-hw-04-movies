import style from './AppBar.module.css';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <header className={style.AppBar}>
      <Navigation />
    </header>
  );
};
export default AppBar;
