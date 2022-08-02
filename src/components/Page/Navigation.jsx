import { Link } from 'react-router-dom';
import styles from './Navigation.css';

export default function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="list">List</NavLink>
      <NavLink to="pokedex">Pokedex</NavLink>
      <NavLink to="fuzzy-bunny">Bunnies</NavLink>
      <NavLink to="about">About</NavLink>
    </nav>
  );
}

function NavLink({ children, ...rest }) {
  return (
    <Link className="label-text" {...rest}>
      {children}
    </Link>
  );
}
