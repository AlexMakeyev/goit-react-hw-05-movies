import { Link } from 'react-router-dom';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';
import { FcFilmReel } from 'react-icons/fc';

export function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <FcFilmReel />
          Logo
        </Link>
        <NavbarMenu />
      </nav>
    </header>
  );
}
