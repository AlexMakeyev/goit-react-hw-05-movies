// import { NavLink } from 'react-router-dom';
import { items } from './items';
import { Nav, NavBarLink, Link } from './NavbarMenu.styled';
export function NavbarMenu() {
  const elements = items.map(({ id, to, text }) => {
    return (
      <Link key={id}>
        <NavBarLink to={to} end>
          {text}
        </NavBarLink>
      </Link>
    );
  });
  return <Nav>{elements}</Nav>;
}
