import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Button from "../Widgets/Button";
import cx from "classnames";

import ChatInput from "./ChatInput";
import Instructions from "../Widgets/InstructionModal";

import styles from "./index.module.scss";

const { REACT_APP_WS_HOST } = process.env;

export default function Chat() {
  const navigate = useNavigate();
  const messageListRef = useRef();
  const [isConnecting, setIsConnecting] = useState(false);
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("r") || "";
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  const socket = useRef(null);
  const [messages, setMessages] = useState([]);

  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (!roomId && !user?.name) {
      sessionStorage.setItem("redirectUrl", "/chat/");
      navigate({
        pathname: "/auth/login/",
      });
    }
    if (roomId && !user?.name) {
      sessionStorage.setItem("redirectUrl", `/chat/?r=${roomId}`);
      navigate({
        pathname: "/auth/login/",
      });
    } else if (roomId && !socket.current && user?.name) {
      const handleJoinRoom = async () => {
        setIsConnecting(true);
        try {
          const module = await import("socket.io-client");
          const io = module.default;
          socket.current = io(REACT_APP_WS_HOST, {
            query: { roomId: roomId, name: user.name },
          });
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
  }, [roomId, user?.name, navigate]);

  useEffect(() => {
    if (messageListRef?.current) {
      messageListRef.current.scrollTo({
        top: messageListRef.current.scrollHeight,
        behaviour: "smooth",
      });
    }
  }, [messages]);

  const sendMessage = async (message) => {
    if (message && user?.name) {
      await socket.current.emit("messageFromClient", {
        text: message,
        name: user.name,
      });
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            text: message,
            socketId: socket.current.id,
            type: "user",
            name: user.name,
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
      socket.current = io(REACT_APP_WS_HOST, { query: { roomId: roomId } });
      socket.current.on("messageFromServer", (msg = {}) => {
        setMessages((prevMessages) => {
          return [...prevMessages, JSON.parse(msg)];
        });
        // setTimeout(() => {
        //   messageListRef?.current.scrollIntoView({ behaviour: "smooth" });
        // });
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
          <div className={styles.messageList} ref={messageListRef}>
            {messages.map(({ socketId, text, type, name } = {}, index) => (
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
