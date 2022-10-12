import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'Api/Api';
import { ReviewsList } from './ReviewsList/ReviewsList';
import { RevtInfo } from './Reviews.styled';

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
    return (
      <RevtInfo>
        <p>Sorry, there is no reviews for current movie.</p>
      </RevtInfo>
    );
  }

  return <ReviewsList movieReviews={movieReviews} />;
}
