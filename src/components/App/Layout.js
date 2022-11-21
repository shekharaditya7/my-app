import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Instructions from "../Widgets/InstructionModal";

import INSTRUCTIONS from "../Widgets/instructions.contants";
import pages from "../../pages";

import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  const activePathKey = useRef("");
  const { pathname } = useLocation();
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    Object.keys(pages).forEach((key) => {
      if (pages[key] === pathname) activePathKey.current = key;
    });

    if (
      pages[activePathKey.current] &&
      !localStorage.getItem(activePathKey.current)
    )
      setShowInstructions(true);
  }, [pathname]);

  const handleInstructionClose = () => {
    localStorage.setItem(activePathKey.current, "true");
    setShowInstructions(false);
  };
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.rhs}>
        <Header onInfoIconClick={() => setShowInstructions(true)} />
        <div className={styles.rhsContent}>{children}</div>
      </div>
      {showInstructions ? (
        <Instructions
          onClose={handleInstructionClose}
          {...INSTRUCTIONS[pages[activePathKey.current]]}
        />
      ) : null}
    </div>
  );
}
