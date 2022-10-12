import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'Api/Api';
import { ReviewsList } from './ReviewsList/ReviewsList';

export function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMoviesReviews(movieId).then(setMovieReviews);
  }, [movieId]);

  if (!movieReviews) {
    return;
  }
  if (movieReviews.length === 0) {
    return <p>Sorry, there is no reviews for current movie.</p>;
  }

  return <ReviewsList movieReviews={movieReviews} />;
}
