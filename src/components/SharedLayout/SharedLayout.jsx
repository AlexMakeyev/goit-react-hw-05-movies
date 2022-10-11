import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';

export function SharedLayout() {
  return (
    <header>
      <Navbar />
      <Outlet />
      <footer>Copyright 2022 &copy;</footer>
    </header>
  );
}
