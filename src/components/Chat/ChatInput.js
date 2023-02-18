import { useState } from "react";
import cx from "classnames";
import useKeyPress from "../../utils/hooks/useKeyPress";
import styles from "./ChatInput.module.scss";

export default function ChatInput({ handleSendMessage, className }) {
  const [textMessage, setTextMessage] = useState("");
  const sendButtonClick = () => {
    handleSendMessage(textMessage);
    setTextMessage("");
  };
  useKeyPress({ keyCode: 13, onKeyPress: sendButtonClick });
  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.header}>
        <input
          type="text"
          onChange={(event) => setTextMessage(event.target.value)}
          value={textMessage}
          className={styles.urlInput}
        ></input>
        <button onClick={sendButtonClick}>Send</button>
      </div>
    </div>
  );
}