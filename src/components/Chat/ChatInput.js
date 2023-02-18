import { useState } from "react";
import cx from "classnames";
import styles from "./ChatInput.module.scss";

export default function ChatInput({ handleSendMessage, className }) {
  const [textMessage, setTextMessage] = useState("");

  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.header}>
        <input
          type="url"
          onChange={(event) => setTextMessage(event.target.value)}
          value={textMessage}
          className={styles.urlInput}
        ></input>
        <button onClick={() => handleSendMessage(textMessage)}>Send</button>
      </div>
    </div>
  );
}
