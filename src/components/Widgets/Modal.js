import ReactModal from "react-modal";
import { useCallback, useEffect } from "react";
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
  const handleCloseClick = useCallback(() => {
    onRequestClose && onRequestClose();
  }, [onRequestClose]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      event.stopPropagation();
      if (event.keyCode === 27) {
        handleCloseClick && handleCloseClick();
      }
    };
    if (shouldCloseOnEscape) document.addEventListener("keyup", handleKeyPress);
    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, [shouldCloseOnEscape, handleCloseClick]);

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
          className={cx(styles.closeButton, crossButtonClassName)}
          onClick={handleCloseClick}
        >
          <img alt="cross" src={"/images/sidebar/CrossIcon.png"}></img>
        </div>
      )}
      {children}
    </ReactModal>
  );
}

export default Modal;
