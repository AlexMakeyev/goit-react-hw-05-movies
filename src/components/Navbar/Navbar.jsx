import { Link } from 'react-router-dom';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Logo</Link>
        <NavbarMenu />
      </div>
    </nav>
  );
};
