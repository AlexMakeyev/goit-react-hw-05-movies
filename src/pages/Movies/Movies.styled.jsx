import styled from '@emotion/styled';
const setHeight = props => (props.value ? '100vh' : '100%');
export const MainContainer = styled.main`
  margin: auto;
  width: 1600px;
  height: ${setHeight};
`;
