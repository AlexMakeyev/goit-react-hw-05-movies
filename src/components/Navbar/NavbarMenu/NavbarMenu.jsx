import { NavLink } from 'react-router-dom';
import { items } from './items';

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
  return <ul>{elements}</ul>;
}
