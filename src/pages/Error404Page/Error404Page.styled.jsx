import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ErrorList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
`;
export const ErrorItem = styled.li`
  margin-left: 20px;
`;
export const ErrorLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  width: 50px;

  padding: 10px 15px;
  color: #4fa94d;
  border: 1px solid #4fa94d;
  border-radius: 2px;
  background-color: #fff;
  :active {
    background-color: #4fa94d;
    color: #fff;
  }
  :focus {
    background-color: #4fa94d;
    color: #fff;
  }
`;
