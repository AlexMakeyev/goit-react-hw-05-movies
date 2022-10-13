import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'components/Navbar/Navbar';
import { Footer, Container } from './SharedLayout.styled';
export default function SharedLayout() {
  return (
    <Container>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer>Copyright 2022 &copy;</Footer>
    </Container>
  );
}
