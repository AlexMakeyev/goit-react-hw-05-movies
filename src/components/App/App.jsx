import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { Navbar } from 'components/Navbar/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  );
};
