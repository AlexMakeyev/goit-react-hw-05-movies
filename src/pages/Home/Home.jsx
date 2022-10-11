import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../Api/Api';
import { MoviesList } from '../../components/MoviesList/MoviesList';

export const Home = () => {
  const [trend, setTrend] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(setTrend);
  }, []);
  return <MoviesList movies={trend} />;
};
