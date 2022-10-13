// import { Link } from 'react-router-dom';
import {
  ErrorLink,
  ErrorList,
  ErrorItem,
  ErrorContainer,
} from './Error404Page.styled';
export default function Error404Page() {
  return (
    <div>
      <ErrorContainer>
        <h1>OOPS the page you were looking for is not found</h1>
        <h2>Maybe those links can help you:</h2>
        <ErrorList>
          <ErrorItem>
            <ErrorLink to={'/'}>Home</ErrorLink>
          </ErrorItem>
          <ErrorItem>
            <ErrorLink to={'/movies'}>Movies</ErrorLink>
          </ErrorItem>
        </ErrorList>
      </ErrorContainer>
    </div>
  );
}
