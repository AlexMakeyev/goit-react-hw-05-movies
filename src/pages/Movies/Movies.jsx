import { Searchbar } from 'components/Searchbar/Searchbar';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { searchMovies } from 'Api/Api';
import { Loader } from 'components/Loader/Loader';
import { Alert } from 'components/Alert/Alert';

export function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  const updateQuery = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };
  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);
  return (
    <div>
      {loading && <Loader />}
      {error && <Alert />}
      <Searchbar value={query} onChange={updateQuery} />
      <MoviesList movies={movies} />
    </div>
  );
}
