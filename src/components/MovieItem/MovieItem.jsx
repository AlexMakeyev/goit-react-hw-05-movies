// import { Outlet, useLocation, NavLink } from 'react-router-dom';
import {
  MovieContainer,
  InfoContainer,
  MovieTitle,
  MovieInfo,
} from './MovieItem.styled';

export function MovieItem({ movie, onClick }) {
  // const location = useLocation();
  // const from = location.state?.from ?? '/movies';

  const {
    poster_path,
    title,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = movie;

  const backdrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  return (
    <>
      <div backdrop_path={backdrop} onClick={() => onClick(backdrop)}>
        <MovieContainer>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'no poster found'
            }
            alt={title}
          />
          <InfoContainer>
            <MovieTitle>{title}</MovieTitle>
            <MovieInfo>{release_date}</MovieInfo>
            <MovieInfo>
              {vote_average
                ? Math.round((vote_average * 100) / 10)
                : 'no rating found'}
              %
            </MovieInfo>
            <MovieTitle>Overview</MovieTitle>
            <MovieInfo>{overview ? overview : 'no overview found'}</MovieInfo>
            <MovieTitle>Genres</MovieTitle>
            <MovieInfo>
              {genres
                ? genres.map(genre => genre.name).join(', ')
                : 'no genres found'}
            </MovieInfo>
          </InfoContainer>
        </MovieContainer>
      </div>
      <div>{/* <Outlet /> */}</div>
    </>
  );
}
