import { Link } from "react-router-dom";
import NAV_ITEMS from "./sidebar.constants";
import styles from "./Sidebar.module.scss";

function SideBarItem({ url, logoSrc, alt, className, label }) {
  return (
    <Link to={url} className={className}>
      <img alt={alt} src={logoSrc}></img>
      <div className={styles.label}> {label}</div>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className={styles.sidebarWrapper}>
      {NAV_ITEMS.map(({ url, logoSrc, alt, label }) => (
        <SideBarItem
          key={url}
          className={styles.sidebarItem}
          url={url}
          logoSrc={logoSrc}
          alt={alt}
          label={label}
        />
      ))}
    </div>
  );
}
