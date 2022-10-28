import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <Header />
        {children}
      </div>
    </div>
  );
}
