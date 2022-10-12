import { Link } from 'react-router-dom';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';
import { FcFilmReel } from 'react-icons/fc';
import { Header, NavBar } from './Navbar.styled';

export function Navbar() {
  return (
    <Header>
      <NavBar>
        <Link to="/">
          <FcFilmReel size="80" />
        </Link>
        <NavbarMenu />
      </NavBar>
    </Header>
  );
}
