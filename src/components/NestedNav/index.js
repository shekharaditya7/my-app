import { useState } from "react";
import NestedNavItem from "./NestedNavItem";
import styles from "./index.module.scss";

export default function NestedNav() {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
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
        <button className="button"> Submit </button>
      </div>
      <div className="vertical-line"></div>
      <div className="rhs">
        <NestedNavItem />
      </div>
    </div>
  );
}
