import Modal from "./Modal";
import styles from "./ConfirmationModal.module.scss";

export default function ConfirmationModal({
  onClose,
  title,
  items = [],
  onYesClick,
  onCancelClick,
} = {}) {
  return (
    <Modal
      onRequestClose={onClose}
      className={styles.modal}
      shouldCloseOnEscape={false}
    >
      <div className={styles.title}> {title ?? "WIP"} </div>
      <ul>
        {items.map((step, index) => (
          <div key={index} className={styles.step}>
            {step}
          </div>
        ))}
      </ul>
      <div className={styles.buttons}>
        <button onClick={onYesClick} className={styles.yes}>
          Yes
        </button>
        <button onClick={onCancelClick} className={styles.cancel}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
