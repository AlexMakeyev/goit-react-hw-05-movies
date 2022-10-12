import { RevMenu, RevItem, RevTitle } from './ReviewsList.styled';
export function ReviewsList({ movieReviews }) {
  const data = movieReviews.map(({ id, author, content }) => {
    return (
      <RevItem key={id}>
        <RevTitle>{author ? author : 'no author found'}</RevTitle>
        <p>{content ? content : 'no content found'}</p>
      </RevItem>
    );
  });
  return <RevMenu>{data}</RevMenu>;
}
