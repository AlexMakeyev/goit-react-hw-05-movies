import { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getMoviesbyId } from 'Api/Api';
import { Alert } from 'components/Alert/Alert';
import { Loader } from 'components/Loader/Loader';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { FcLeft } from 'react-icons/fc';

export function MovieDetails() {
  const [movie, setMovie] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const from = location.state?.from ?? '/';
  const navigate = useNavigate();

  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getMoviesbyId(movieId);
        setMovie(data);
      } catch (error) {
        setError(error.toJSON());
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  // if (!movie) {
  //   return null;
  // }

  return (
    <div>
      {loading && <Loader />}
      {error && <Alert />}
      <button onClick={goBack}>
        <FcLeft />
        Back
      </button>
      <MovieItem movie={movie} />
    </div>
  );
}
