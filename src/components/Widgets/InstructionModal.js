import Modal from "./Modal";
import cx from "classnames";
import styles from "./InstructionModal.module.scss";

export default function InstructionModal({
  onClose,
  title,
  instructions = [],
  className,
} = {}) {
  return (
    <Modal
      onRequestClose={onClose}
      className={cx(styles.modal, className)}
      shouldCloseOnEscape={false}
    >
      <div className={styles.title}> {title ?? "WIP"} </div>
      <ul>
        {instructions.map((step, index) => (
          <div key={index} className={styles.step}>
            {step}
          </div>
        ))}
      </ul>
    </Modal>
  );
}
