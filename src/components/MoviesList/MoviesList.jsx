import { useLocation } from 'react-router-dom';
import { List, Item, ItemLink, ItemTitle } from './MovieList.styled';
export function MoviesList({ movies }) {
  const location = useLocation();
  const items = movies.map(({ id, title, poster_path }) => (
    <Item key={id}>
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : 'No poster found'
          }
          alt={title}
        />
        <ItemTitle>{title}</ItemTitle>
      </ItemLink>
    </Item>
  ));

  return <List>{items}</List>;
}
