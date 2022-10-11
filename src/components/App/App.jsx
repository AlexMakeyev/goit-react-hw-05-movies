import { Routes, Route } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="reviewers" element={<Reviews />} />
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
