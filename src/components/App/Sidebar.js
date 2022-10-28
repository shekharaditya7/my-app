import styles from "./Sidebar.module.scss";

function SideBarItem({ sideBarObj, className }) {
  return (
    <div className={className}>
      <img
        height={32}
        width={32}
        alt={"home" || sideBarObj.alt}
        src="/images/sidebar/HomeIcon.webp/"
      ></img>
    </div>
  );
}

export default function Sidebar() {
  return <SideBarItem className={styles.sidebarItem} />;
}
