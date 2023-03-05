import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import Button from "../Widgets/Button";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import Instructions from "../Widgets/InstructionModal";

import { EVENTS, USER_TYPES } from "./chat.constants";
import pages from "../../pages";

import styles from "./index.module.scss";

const { REACT_APP_WS_HOST } = process.env;

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
    // CASE : If user is generating the link, but he is not logged in => Ask him to login
    if (!roomId && !user?.name) {
      sessionStorage.setItem("redirectUrl", "/chat/");
      navigate({
        pathname: pages.LOGIN,
      });
    }

    // CASE : If the user wants to join using a room link, but he is not logged in => Ask him to login
    if (roomId && !user?.name) {
      sessionStorage.setItem("redirectUrl", `${pages.CHAT}?r=${roomId}`);
      navigate({
        pathname: pages.LOGIN,
      });
    } else if (roomId && !socket.current && user?.name) {
      /*
      Connect to socket (to the given room id) if
        1. User is logged in, and
        2. Is not already connected
    */
      const handleJoinRoom = async () => {
        setIsConnecting(true);
        try {
          const module = await import("socket.io-client");
          const io = module.default;
          socket.current = io(REACT_APP_WS_HOST, {
            query: { roomId: roomId, name: user.name },
          });
          socket.current.on(EVENTS.MESSAGE_FROM_SERVER, (msg = {}) => {
            setMessages((prevMessages) => {
              return [...prevMessages, JSON.parse(msg)];
            });
          });
          socket.current.on(EVENTS.CONNECT, () => {
            setIsConnecting(false);
          });
        } catch (e) {
          setIsConnecting(false);
        }
      };
      handleJoinRoom();
    }
  }, [roomId, user?.name, navigate]);

  const sendMessage = async (message) => {
    if (message && user?.name) {
      await socket.current.emit(EVENTS.MESSAGE_FROM_CLIENT, {
        text: message,
        name: user.name,
      });
      setMessages((prevMessages) => {
        return [
          ...prevMessages,
          {
            text: message,
            socketId: socket.current.id,
            type: USER_TYPES.USER,
            name: user.name,
          },
        ];
      });
    }
  };

  /*
    When the user generates the link by himself
  */
  const createRoom = async (roomId) => {
    await navigator.clipboard.writeText(
      `${window.location.origin}${pages.CHAT}?r=${roomId}`
    );
    setIsConnecting(true);
    try {
      const module = await import("socket.io-client");
      const io = module.default;

      socket.current = io(REACT_APP_WS_HOST, { query: { roomId: roomId } });
      socket.current.on(EVENTS.MESSAGE_FROM_SERVER, (msg = {}) => {
        setMessages((prevMessages) => {
          return [...prevMessages, JSON.parse(msg)];
        });
      });
      socket.current.on(EVENTS.CONNECT, () => {
        setIsConnecting(false);
        setShowInstructions(true);
      });
      navigate({
        search: `?r=${roomId}`,
      });
    } catch (e) {
      alert(e);
      setIsConnecting(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      {roomId && socket?.current?.connected ? (
        <>
          <MessageList messages={messages} socket={socket} />
          <ChatInput
            className={styles.chatInput}
            handleSendMessage={sendMessage}
          />
        </>
      ) : (
        <Button
          className={styles.generateLink}
          onClick={() => createRoom(v4())}
          label={"Generate Chat Link"}
          isLoading={isConnecting}
        >
          {isConnecting ? "Connecting..." : ""}
        </Button>
      )}
      {showInstructions ? (
        <Instructions
          title={"All set!"}
          instructions={[
            "Link copied to clipboard.",
            "Share it with people to invite them to chat.",
          ]}
          className={styles.alert}
          onClose={() => setShowInstructions(false)}
        />
      ) : null}
    </div>
  );
}
