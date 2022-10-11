import { Outlet, useLocation, NavLink } from 'react-router-dom';

export function MovieItem({ movie }) {
  const location = useLocation();
  const from = location.state?.from ?? '/movies';
  const {
    poster_path,
    title,
    vote_average,
    overview,
    genres,
    release_date,
    backdrop_path,
  } = movie;

  const backdrop = `https://www.themoviedb.org/t/p/w1280_and_h800_multi_faces/${backdrop_path}`;

  return (
    <>
      <div backdrop_path={backdrop}>
        <div className="container">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : 'no poster found'
            }
            alt={title}
          />
          <section>
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>{vote_average ? Math.round((vote_average * 100) / 10) : ''}%</p>
            <h2>Overview</h2>
            <p>{overview ? overview : ''}</p>
            <h2>Genres</h2>
            <p>{genres ? genres.map(genre => genre.name).join(',') : ''}</p>
          </section>
        </div>
        <section>
          <h2>Additional Information</h2>
          <div>
            <NavLink state={{ from }} to="cast">
              Cast
            </NavLink>
            <NavLink state={{ from }} to="reviewers">
              Cast
            </NavLink>
            <Outlet />
          </div>
        </section>
      </div>
    </>
  );
}
