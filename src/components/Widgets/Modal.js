import ReactModal from "react-modal";
import { useCallback, useEffect } from "react";
import styles from "./Modal.module.scss";
import cx from "classnames";

const modalId = "React_Modal_Custom";

function Modal({
  children,
  className,
  onRequestClose,
  hideCloseButton,
  overlayClassName,
  shouldCloseOnOverlayClick = true,
  shouldCloseOnEscape = true,
  crossButtonClassName,
  animate = true,
}) {
  const handleCloseClick = useCallback(() => {
    if (animate)
      document.getElementById(modalId)?.classList?.add(styles.slideDown);
    setTimeout(
      () => {
        onRequestClose && onRequestClose();
      },
      animate ? 250 : 0
    );
  }, [onRequestClose, animate]);

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

  const _className = cx(styles.modal, className, { [styles.slideUp]: animate });
  const _overlayClassName = cx(styles.overlay, overlayClassName);

  return (
    <ReactModal
      id={modalId}
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
          <img alt="cross" src={"/images/sidebar/CrossIcon.webp"}></img>
        </div>
      )}
      {children}
    </ReactModal>
  );
}

export default Modal;
