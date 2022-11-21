import Modal from "./Modal";
import styles from "./InstructionModal.module.scss";

export default function InstructionModal({
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
