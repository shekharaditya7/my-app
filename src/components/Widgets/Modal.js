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
  shouldCloseOnOverlayClick = false,
  shouldCloseOnEscape = true,
  crossButtonClassName,
}) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      event.Propagation();
      if (event.keyCode === 27) {
        handleCloseClick();
      }
    };
    if (shouldCloseOnEscape) document.addEventListener("keyup", handleKeyPress);
    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  }, []);

  const handleCloseClick = () => onRequestClose();
  const _className = cx(styles.modal, className);
  const _overlayClassName = cx(styles.overlay, overlayClassName);

  return (
    <ReactModal
      isOpen
      ariaHideApp={false}
      contentLabel="Modal"
      className={_className}
      overlayClassName={_overlayClassName}
    >
      {hideCloseButton ? null : (
        <div
          className={cx(
            styles.closeButton,
            "flex_centered",
            crossButtonClassName
          )}
          onClick={this.handleCloseClick}
        >
          <img
            src={"/images/sidebar/CrossIcon.png"}
            width={10}
            height={10}
            alt={"close"}
          />
        </div>
      )}
      {children}
    </ReactModal>
  );
}

export default Modal;
