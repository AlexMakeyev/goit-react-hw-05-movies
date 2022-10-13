import styled from '@emotion/styled';
const setHeight = ({ query }) => {
  if (query !== '') {
    return '100%';
  } else {
    return '100vh';
  }
};
export const MainContainer = styled.main`
  margin: auto;
  width: 1600px;
  height: ${setHeight};
`;
