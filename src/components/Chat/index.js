import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { useSearchParams, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import ChatInput from "./ChatInput";

const SOCKET_SERVER =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8080/";

export default function Chat() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("r") || "";

  const socket = useRef(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId && !socket.current) {
      const handleJoinRoom = async () => {
        const module = await import("socket.io-client");
        const io = module.default;
        socket.current = io(SOCKET_SERVER, { query: { roomId: roomId } });
        socket.current.on("messageFromServer", (msg = []) => {
          setMessages((prevMessages) => {
            return [...prevMessages, msg];
          });
        });
      };
      handleJoinRoom();
    }
  }, [roomId]);

  const sendMessage = (message) => {
    if (message) socket.current.emit("messageFromClient", message);
  };

  const createRoom = async () => {
    const module = await import("socket.io-client");
    const io = module.default;
    const roomId = v4();
    socket.current = io(SOCKET_SERVER, { query: { roomId: roomId } });

    navigate({
      search: `?r=${roomId}`,
    });
    navigator.clipboard
      .writeText(`${window.location.origin}/chat/?r=${roomId}`)
      .then(() => alert("Copied to clipboard"));
  };

  return (
    <div className={styles.wrapper}>
      {roomId ? (
        <>
          <div className={styles.messageList}>
            {messages.map((msg) => (
              <li>{msg}</li>
            ))}
          </div>
          <ChatInput
            className={styles.chatInput}
            handleSendMessage={sendMessage}
          />
        </>
      ) : (
        <button onClick={createRoom}> Generate Chat Link </button>
      )}
    </div>
  );
}
