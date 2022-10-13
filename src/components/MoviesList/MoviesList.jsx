import { useLocation } from 'react-router-dom';
import { List, Item, ItemLink, ItemTitle, Poster } from './MovieList.styled';
import image_placeholder from '../../images/image_placeholder.png';
export function MoviesList({ movies }) {
  const location = useLocation();
  const items = movies.map(({ id, title, poster_path }) => (
    <Item key={id}>
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : image_placeholder
          }
          alt={title}
        />
        <ItemTitle>{title}</ItemTitle>
      </ItemLink>
    </Item>
  ));

  return <List>{items}</List>;
}
