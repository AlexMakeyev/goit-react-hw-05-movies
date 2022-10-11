import { Link } from 'react-router-dom';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';
import { FcFilmReel } from 'react-icons/fc';
import { Outlet } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <Link to="/">
        <FcFilmReel />
        Logo
      </Link>
      <NavbarMenu />
    </nav>
  );
}
