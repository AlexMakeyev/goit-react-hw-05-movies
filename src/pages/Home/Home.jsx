import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../Api/Api';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Alert } from 'components/Alert/Alert';
import { GoFlame } from 'react-icons/go';
import { MainContainer, Title } from './Home.styled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getTrendingMovies();
        setMovies(result.results);
      } catch (error) {
        setError(error.toJSON());
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (!movies) {
    return null;
  }

  return (
    <MainContainer>
      {loading && <Loader />}
      {error && <Alert />}
      <Title>
        Hot week trends
        <GoFlame />
      </Title>

      <MoviesList movies={movies} />
    </MainContainer>
  );
}
