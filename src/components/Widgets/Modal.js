import ReactModal from "react-modal";
import { useEffect } from "react";
import styles from "./Modal.module.scss";
import cx from "classnames";

function Modal({
  children,
  className,
  onRequestClose,
  hideCloseButton,
  overlayClassName,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEscape = true,
  crossButtonClassName,
}) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      event.stopPropagation();
      if (event.keyCode === 27) {
        handleCloseClick();
      }
    };
    if (shouldCloseOnEscape) document.addEventListener("keyup", handleKeyPress);
    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  const handleCloseClick = () => {
    onRequestClose && onRequestClose();
  };
  const _className = cx(styles.modal, className);
  const _overlayClassName = cx(styles.overlay, overlayClassName);

  return (
    <ReactModal
      isOpen
      ariaHideApp={false}
      contentLabel="Modal"
      className={_className}
      overlayClassName={_overlayClassName}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      onRequestClose={handleCloseClick}
    >
      {hideCloseButton ? null : (
        <div
          className={cx(
            styles.closeButton,
            "flex_centered",
            crossButtonClassName
          )}
          onClick={handleCloseClick}
        >
          x
        </div>
      )}
      {children}
    </ReactModal>
  );
}

export default Modal;
