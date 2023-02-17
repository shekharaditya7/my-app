import io from "socket.io-client";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";

export default function Chat() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    const socket = io("http://localhost:8080/");

    socket.on("newIncomingMessage", (msg) => {
      console.log(msg);
    });
  };

  return (
    <div className={styles.wrapper}>
      <h1>{num}</h1>
    </div>
  );
}
