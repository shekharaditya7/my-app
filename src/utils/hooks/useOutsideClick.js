import { useEffect } from "react";

export default function useOutsideClick({ ref, onOutsideClick }) {
  const handleOutSideClick = (event) => {
    if (ref && ref.current && !ref.current.contains(event.target)) {
      console.log("hello");
      onOutsideClick && onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  });
  return;
}
