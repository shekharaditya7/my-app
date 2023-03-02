import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Button from "../Widgets/Button";
import cx from "classnames";

import ChatInput from "./ChatInput";
import Instructions from "../Widgets/InstructionModal";

import styles from "./index.module.scss";

const SOCKET_SERVER =
  process.env.NODE_ENV === "production"
    ? "https://websocket-ko96.onrender.com"
    : "http://localhost:8080/";

export default function Chat() {
  const navigate = useNavigate();
  const [isConnecting, setIsConnecting] = useState(false);
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("r") || "";
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  const socket = useRef(null);
  const [messages, setMessages] = useState([]);

  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (!roomId && !user?.email) {
      sessionStorage.setItem("redirectUrl", "/chat/");
      navigate({
        pathname: "/auth/login/",
      });
    }
    if (roomId && !user?.email) {
      sessionStorage.setItem("redirectUrl", `/chat/?r=${roomId}`);
      navigate({
        pathname: "/auth/login/",
      });
    } else if (roomId && !socket.current && user?.email) {
      const handleJoinRoom = async () => {
        setIsConnecting(true);
        try {
          const module = await import("socket.io-client");
          const io = module.default;
          socket.current = io(SOCKET_SERVER, { query: { roomId: roomId } });
          socket.current.on("messageFromServer", (msg = {}) => {
            setMessages((prevMessages) => {
              return [...prevMessages, JSON.parse(msg)];
            });
          });
          socket.current.on("connect", () => {
            setIsConnecting(false);
          });
        } catch (e) {
          setIsConnecting(false);
        }
      };
      handleJoinRoom();
    }
  }, [roomId, user?.email, navigate]);

  console.log(socket.current);

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
    setIsConnecting(true);
    try {
      const module = await import("socket.io-client");
      const io = module.default;
      const roomId = v4();
      socket.current = io(SOCKET_SERVER, { query: { roomId: roomId } });
      socket.current.on("messageFromServer", (msg = {}) => {
        setMessages((prevMessages) => {
          return [...prevMessages, JSON.parse(msg)];
        });
      });
      socket.current.on("connect", () => {
        setIsConnecting(false);
      });
      navigate({
        search: `?r=${roomId}`,
      });
      navigator.clipboard
        .writeText(`${window.location.origin}/chat/?r=${roomId}`)
        .then(() => setShowInstructions(true));
    } catch (e) {
      alert(e);
      setIsConnecting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      {roomId && socket?.current?.connected ? (
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
        <Button
          className={styles.generateLink}
          onClick={createRoom}
          label={"Generate Chat Link"}
          isLoading={isConnecting}
        />
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
