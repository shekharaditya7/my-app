import { useEffect } from "react";

export default function useKeyPress({ keyCode, onKeyPress }) {
  useEffect(() => {
    function handleKeyPress(e) {
      if (e.keyCode === keyCode) {
        onKeyPress && onKeyPress();
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [keyCode, onKeyPress]);
}
