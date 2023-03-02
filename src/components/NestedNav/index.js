import { useState } from "react";
import NestedNavItem from "./NestedNavItem";
import validateNavObject from "./validateNavObject";
import styles from "./index.module.scss";

import { defaultNavObject } from "./nestedNav.constants";
import Button from "../Widgets/Button";

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
        <Button onClick={handleTextSubmit} label={"Submit"} />
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.rhs}>
        <NestedNavItem navObject={navObject} />
      </div>
    </div>
  );
}
