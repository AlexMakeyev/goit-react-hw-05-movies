import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Overlay = styled.div`
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalWindow = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  border: 1px solid #4fa94d;
  border-radius: 2px;
  width: 80px;
  height: 40px;
  margin-left: 20px;
  background-color: #fff;
  color: #4fa94d;
  cursor: pointer;
  :active {
    background-color: #4fa94d;
    color: #fff;
  }
  :focus {
    background-color: #4fa94d;
    color: #fff;
  }
`;
export const ModalTitle = styled.h2`
  text-align: center;
`;
export const ModalList = styled.div`
  text-align: center;
`;
export const ModalLink = styled(NavLink)`
  text-decoration: none;
  margin: 10px;
  width: 80px;
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
export const ModalImg = styled.img`
  width: 100%;
`;
