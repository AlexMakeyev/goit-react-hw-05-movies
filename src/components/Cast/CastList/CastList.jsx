export function CastList({ movieCast }) {
  const data = movieCast.map(item => {
    const { id, profile_path, original_name, character } = item;
    return (
      <li key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w300${profile_path}`
              : 'no photo found'
          }
          alt={original_name}
        />
        <p>{original_name ? original_name : 'no decription'}</p>
        <p>{character ? character : 'no decription'}</p>
      </li>
    );
  });
  return <ul>{data}</ul>;
}
