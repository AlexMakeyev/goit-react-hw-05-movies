import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
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

export const Link = styled.li`
  margin-left: 20px;
`;
