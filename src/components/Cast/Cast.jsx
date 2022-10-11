import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from 'Api/Api';
import { CastList } from './CastList/CastList';

export function Cast() {
  const [movieCast, setMovieCast] = useState(0);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesCredits(movieId).then(setMovieCast);
  }, [movieId]);

  if (!movieCast) {
    return;
  }
  if (movieCast.length === 0) {
    return <p>Sorry, there is no cast for current movie.</p>;
  }

  return <CastList movieCast={movieCast} />;
}
