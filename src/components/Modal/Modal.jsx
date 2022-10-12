import { useEffect } from 'react';
import { NavLink, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { FcLeft } from 'react-icons/fc';
import { createPortal } from 'react-dom';
import { Overlay, ModalWindow } from './Modal.styled';

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
        <button onClick={goBack}>
          <FcLeft />
          Back
        </button>
        <img src={backdrop} alt="" />
        <h2>Additional information</h2>
        <div>
          <NavLink state={{ from }} to="cast">
            Cast
          </NavLink>
          <NavLink state={{ from }} to="reviews">
            Reviews
          </NavLink>
        </div>
        <Outlet />
      </ModalWindow>
    </Overlay>
  );
  console.log(instance);

  return createPortal(instance, modalRoot);
}
