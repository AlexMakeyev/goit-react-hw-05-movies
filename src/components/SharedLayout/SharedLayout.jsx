import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';

export function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>Copyright 2022 &copy;</footer>
    </>
  );
}
