import Modal from "./Modal";
import cx from "classnames";
import styles from "./InstructionModal.module.scss";

export default function InstructionModal({
  onClose,
  title,
  instructions = [],
  className,
  overlayClassName,
} = {}) {
  return (
    <Modal
      onRequestClose={onClose}
      className={cx(styles.modal, className)}
      shouldCloseOnEscape={false}
      overlayClassName={overlayClassName}
    >
      {title ? <div className={styles.title}> {title}</div> : null}
      <ul>
        {instructions.map((step, index) => (
          <li key={index} className={styles.step}>
            {step}
          </li>
        ))}
      </ul>
    </Modal>
  );
}
