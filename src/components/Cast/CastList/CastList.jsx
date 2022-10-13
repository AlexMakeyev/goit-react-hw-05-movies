import { CastMenu, CastItem, CastTitle } from './CastList.styled';
import image_placeholder from '../../../images/image_placeholder.png';

export function CastList({ movieCast }) {
  const data = movieCast.map(item => {
    const { id, profile_path, original_name, character } = item;
    return (
      <CastItem key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : image_placeholder
          }
          alt={original_name}
        />
        <CastTitle>{original_name ? original_name : 'no decription'}</CastTitle>
        <CastTitle>{character ? character : 'no decription'}</CastTitle>
      </CastItem>
    );
  });
  return <CastMenu>{data}</CastMenu>;
}
