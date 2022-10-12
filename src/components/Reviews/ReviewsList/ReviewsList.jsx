export function ReviewsList({ movieReviews }) {
  const data = movieReviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <h3>{author ? author : 'no author found'}</h3>
        <p>{content ? content : 'no content found'}</p>
      </li>
    );
  });
  return <ul>{data}</ul>;
}
