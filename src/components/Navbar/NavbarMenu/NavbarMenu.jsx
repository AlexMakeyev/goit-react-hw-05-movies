import { NavLink } from 'react-router-dom';
import { items } from './items';
import { Nav } from './NavbarMenu.styled';
export function NavbarMenu() {
  const elements = items.map(({ id, to, text }) => {
    return (
      <li key={id}>
        <NavLink to={to} end>
          {text}
        </NavLink>
      </li>
    );
  });
  return <Nav>{elements}</Nav>;
}
