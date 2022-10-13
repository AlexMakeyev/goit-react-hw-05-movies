import styled from '@emotion/styled';
const setHeight = ({ value }) => {
  if (value !== '') {
    return 'width:100%';
  }
};
export const MainContainer = styled.main`
  margin: auto;
  width: 1600px;
  height: ${setHeight};
`;
