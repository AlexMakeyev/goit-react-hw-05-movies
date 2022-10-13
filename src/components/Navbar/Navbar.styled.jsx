import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Header = styled.header`
  padding: 15px;
  background-color: #daf5ee;
  border-bottom: 5px solid #4fa94d;
  width: 1600px;
`;

export const NavBar = styled.nav`
  display: flex;
`;
export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 40px;
  font-weight: bold;
  color: #4fa94d;
`;
