import Modal from "./Modal";
import styles from "./Instructions.module.scss";

export default function Instruction({
  onClose,
  title,
  instructions = [],
} = {}) {
  return (
    <Modal
      onRequestClose={onClose}
      className={styles.modal}
      shouldCloseOnEscape={false}
    >
      <div className={styles.title}> {title}</div>
      <ul>
        {instructions.map((step) => (
          <div className={styles.step}>{step}</div>
        ))}
      </ul>
    </Modal>
  );
}
