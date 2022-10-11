import { Link } from 'react-router-dom';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';
import { FcFilmReel } from 'react-icons/fc';

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <FcFilmReel />
          Logo
        </Link>
        <NavbarMenu />
      </div>
    </nav>
  );
};
