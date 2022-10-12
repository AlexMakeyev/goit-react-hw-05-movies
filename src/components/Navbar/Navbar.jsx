// import { Link } from 'react-router-dom';
import { NavbarMenu } from './NavbarMenu/NavbarMenu';
import { FcFilmReel } from 'react-icons/fc';
import { Header, NavBar, LogoLink } from './Navbar.styled';

export function Navbar() {
  return (
    <Header>
      <NavBar>
        <LogoLink to="/">
          <FcFilmReel size="80" />
          FilmOnline
        </LogoLink>
        <NavbarMenu />
      </NavBar>
    </Header>
  );
}
