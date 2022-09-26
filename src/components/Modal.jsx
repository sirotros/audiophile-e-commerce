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

function Modal({ children, isOpen = false, basket, middle, onClose }) {
  if (!isOpen) return null;
  const className = `${
    basket ? "min-w-[400px] absolute right-52 top-28" : ""
  } ${middle ? "min-w-[500px] absolute" : ""}`;
  return createPortal(
    <ModalContainer>
      <Overlay onClick={onClose} />
      <div className={className}>{children}</div>
    </ModalContainer>,
    modalRoot
  );
}

export default Modal;
