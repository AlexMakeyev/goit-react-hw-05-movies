import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;
export const Item = styled.li`
  margin: 10px;
  flex-basis: auto;
`;
export const ItemLink = styled(Link)`
  text-decoration: none;
  text-align: center;
`;
export const ItemTitle = styled.p`
  font-size: 12px;
  font-weight: bold;
  color: black;
`;
