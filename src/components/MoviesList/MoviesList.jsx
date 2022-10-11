import { Link, useLocation } from 'react-router-dom';

export function MoviesList({ movies }) {
  const location = useLocation();
  const items = movies.map(({ id, title, poster_path }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : 'No poster found'
          }
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </li>
  ));

  return <ul>{items}</ul>;
}
