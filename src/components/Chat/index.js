import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import cx from "classnames";

import ChatInput from "./ChatInput";
import Instructions from "../Widgets/InstructionModal";

import styles from "./index.module.scss";

const SOCKET_SERVER =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8080/";

export default function Chat() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("r") || "";

  const socket = useRef(null);
  const [messages, setMessages] = useState([]);

  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (roomId && !socket.current) {
      const handleJoinRoom = async () => {
        const module = await import("socket.io-client");
        const io = module.default;
        socket.current = io(SOCKET_SERVER, { query: { roomId: roomId } });
        socket.current.on("messageFromServer", (msg = {}) => {
          setMessages((prevMessages) => {
            return [...prevMessages, JSON.parse(msg)];
          });
        });
      };
      handleJoinRoom();
    }
  }, [roomId]);

  const sendMessage = async (message) => {
    if (message) {
      await socket.current.emit("messageFromClient", message);
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            text: message,
            socketId: socket.current.id,
            type: "user",
          },
        ];
      });
    }
  };

  const createRoom = async () => {
    const module = await import("socket.io-client");
    const io = module.default;
    const roomId = v4();
    socket.current = io(SOCKET_SERVER, { query: { roomId: roomId } });
    socket.current.on("messageFromServer", (msg = {}) => {
      setMessages((prevMessages) => {
        return [...prevMessages, JSON.parse(msg)];
      });
    });
    navigate({
      search: `?r=${roomId}`,
    });
    navigator.clipboard
      .writeText(`${window.location.origin}/chat/?r=${roomId}`)
      .then(() => setShowInstructions(true));
  };

  return (
    <div className={styles.wrapper}>
      {roomId ? (
        <>
          <div className={styles.messageList}>
            {messages.map(({ socketId, text, type } = {}, index) => (
              <div
                key={index}
                className={cx(styles.message, {
                  [styles.sentByOther]: socketId !== socket?.current.id,
                  [styles.sentByServer]: type === "server",
                })}
              >
                {text}
              </div>
            ))}
          </div>
          <ChatInput
            className={styles.chatInput}
            handleSendMessage={sendMessage}
          />
        </>
      ) : (
        <button className={styles.generateLink} onClick={createRoom}>
          Generate Chat Link
        </button>
      )}
      {showInstructions ? (
        <Instructions
          title={"All set!"}
          instructions={[
            "Link copied to clipboard. Share it with your friends to invite them to Chat",
          ]}
          className={styles.alert}
          onClose={() => setShowInstructions(false)}
        />
      ) : null}
    </div>
  );
}
