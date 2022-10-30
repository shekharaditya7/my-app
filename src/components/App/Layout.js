import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className={styles.layout}>
      {showSidebar ? <Sidebar /> : null}
      <div className={styles.rhs}>
        <Header onMenuIconClick={() => setShowSidebar(true)} />
        <div className={styles.rhsContent}>{children}</div>
      </div>
    </div>
  );
}
