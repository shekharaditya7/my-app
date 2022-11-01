import Modal from "./Modal";
import styles from "./Instructions.module.scss";

export default function Instruction({ title, instructions = [] } = {}) {
  return (
    <Modal>
      <div className={styles.title}> {title}</div>
      <ul>
        {instructions.map((step) => (
          <li className={styles.step}>{step}</li>
        ))}
      </ul>
    </Modal>
  );
}
