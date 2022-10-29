import { useState } from "react";
import NestedNavItem from "./NestedNavItem";
import validateNavObject from "./validateNavObject";
import styles from "./index.module.scss";

import { defaultNavObject } from "./NestedNavItem";

export default function NestedNav() {
  const [text, setText] = useState(JSON.stringify(defaultNavObject, null, 2));
  const [navObject, setNavObject] = useState(defaultNavObject);
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
        <button onClick={handleTextSubmit}>Submit</button>
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.rhs}>
        <NestedNavItem navObject={navObject} />
      </div>
    </div>
  );
}
