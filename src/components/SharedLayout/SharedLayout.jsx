import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';
import { Footer, Container } from './SharedLayout.styled';
export function SharedLayout() {
  return (
    <Container>
      <Navbar />
      <Outlet />
      <Footer>Copyright 2022 &copy;</Footer>
    </Container>
  );
}
