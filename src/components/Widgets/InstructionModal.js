import Modal from "./Modal";
import cx from "classnames";
import styles from "./InstructionModal.module.scss";

export default function InstructionModal({
  onClose,
  title,
  instructions = [],
  notes = [],
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
      {instructions?.length ? (
        <ul>
          {instructions.map((step, index) => (
            <li key={index} className={styles.step}>
              {step}
            </li>
          ))}
        </ul>
      ) : null}
      {notes?.length ? (
        <>
          <p className={styles.noteTitle}>Note </p>
          <ul>
            {notes.map((note, index) => {
              return (
                <li key={index} className={styles.note}>
                  {note}
                </li>
              );
            })}
          </ul>
        </>
      ) : null}
    </Modal>
  );
}
