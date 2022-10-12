import { Link } from 'react-router-dom';
export function Error404Page() {
  return (
    <div>
      <div className="container">
        <h1>OOPS the page you were looking for is not found</h1>
        <h2>Maybe those links can help you:</h2>
        <ul>
          <li>
            <Link to={'/home'}>Posts</Link>
          </li>
          <li>
            <Link to={'/movies'}>My books</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
