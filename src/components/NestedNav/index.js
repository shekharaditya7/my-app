import { useState } from "react";
import NestedNavItem from "./NestedNavItem";
import validateNavObject from "./validateNavObject";
import styles from "./index.module.scss";

import { defaultNavObject } from "./nestedNav.constants";
import Button from "../Widgets/Button";

export default function NestedNav() {
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState(JSON.stringify(defaultNavObject, null, 2));
  const [navObject, setNavObject] = useState(defaultNavObject);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextSubmit = () => {
    setIsLoading(true);
    setNavObject(validateNavObject(text));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
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
        <Button
          onClick={handleTextSubmit}
          label={"Submit"}
          isLoading={isLoading}
        />
      </div>
      <div className={styles.verticalLine}></div>
      <div className={styles.rhs}>
        <NestedNavItem navObject={navObject} />
      </div>
    </div>
  );
}
