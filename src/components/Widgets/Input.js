import { useState } from "react";
import cx from "classnames";
import useKeyPress from "./../../utils/hooks/useKeyPress";
import styles from "./Input.module.scss";

const InputTypes = ["text", "email", "url", "password"];

export default function Input({ type, className, onEnterClick }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  useKeyPress({ keyCode: 13, onKeyPress: onEnterClick });

  const handleInputChange = (event) => {
    setValue(event.target.value);
    setError("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        value={value}
        onChange={(event) => handleInputChange(event)}
        className={cx(styles.input, className)}
      ></input>
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
}
