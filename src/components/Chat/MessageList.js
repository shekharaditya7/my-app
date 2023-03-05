import cx from "classnames";
import styles from "./MessageList.module.scss";

export default function MessageList({ messages = [], messageListRef, socket }) {
  return (
    <div className={styles.messageList} ref={messageListRef}>
      {messages?.map(({ socketId, text, type, name } = {}, index) => (
        <div
          key={index}
          className={cx(styles.message, {
            [styles.sentByMe]:
              socketId === socket?.current.id && type !== "server",
            [styles.sentByOther]:
              socketId !== socket?.current.id && type !== "server",
            [styles.sentByServer]: type === "server",
          })}
        >
          {socketId !== socket?.current.id && type !== "server" ? (
            <p className={styles.name}>{name}</p>
          ) : null}
          <p className={styles.text}>{text}</p>
        </div>
      ))}
    </div>
  );
}
