import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

function Overlay({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-dark absolute opacity-50 w-full h-full top-0 left-0 -z-10 "
      tabIndex={1}
    ></div>
  );
}

function ModalContainer({ children }) {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-50 ">
      {children}
    </div>
  );
}

function Modal({ children, isOpen = false, onClose }) {
  if (!isOpen) return null;

  return createPortal(
    <ModalContainer>
      <Overlay onClick={onClose} />
      <div className="min-w-[300px] absolute right-52 top-28">{children}</div>
    </ModalContainer>,
    modalRoot
  );
}

export default Modal;
