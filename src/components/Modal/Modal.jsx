import { useEffect } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import { FcLeft } from 'react-icons/fc';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalWindow,
  Button,
  ModalContainer,
  ModalTitle,
  ModalLink,
  ModalList,
  ModalImg,
} from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export function Modal({ backdrop, onClose }) {
  const location = useLocation();
  const from = location.state?.from ?? '/movies';
  const navigate = useNavigate();
  const goBack = () => navigate(from);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = element => {
      if (element.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const instance = (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <ModalContainer>
          <ModalImg src={backdrop} alt="" />
          <ModalTitle>Additional information</ModalTitle>
          <ModalList>
            <ModalLink state={{ from }} to="cast">
              Cast
            </ModalLink>
            <ModalLink state={{ from }} to="reviews">
              Reviews
            </ModalLink>
            <Button onClick={goBack}>
              <FcLeft />
              Home
            </Button>
          </ModalList>
        </ModalContainer>
        <Outlet />
      </ModalWindow>
    </Overlay>
  );
  // console.log(instance);

  return createPortal(instance, modalRoot);
}
