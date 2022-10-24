import { useState } from "react";
import NestedNavItem from "./NestedNavItem";
import validateNavObject from "./validateNavObject";
import styles from "./index.module.scss";

export default function NestedNav() {
  const [text, setText] = useState("");
  const [navObject, setNavObject] = useState({});
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextSubmit = () => {
    setNavObject(validateNavObject(text));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.lhs}>
        <textarea
          aria-label="objectInput"
          value={text}
          onChange={handleTextChange}
          className={styles.textArea}
        ></textarea>
        <button className="button" onClick={handleTextSubmit}>
          Submit
        </button>
      </div>
      <div className="vertical-line"></div>
      <div className={styles.rhs}>
        <NestedNavItem navObject={navObject} />
      </div>
    </div>
  );
}
