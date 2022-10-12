// import { Outlet, useLocation, NavLink } from 'react-router-dom';

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
        <div>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'no poster found'
            }
            alt={title}
          />
          <div>
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>
              {vote_average ? Math.round((vote_average * 100) / 10) : '...'}%
            </p>
            <h2>Overview</h2>
            <p>{overview ? overview : 'no overview found'}</p>
            <h2>Genres</h2>
            <p>
              {genres
                ? genres.map(genre => genre.name).join(', ')
                : 'no genres found'}
            </p>
          </div>
        </div>
      </div>
      <div>{/* <Outlet /> */}</div>
    </>
  );
}
