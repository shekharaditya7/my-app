import styles from "./TabPrimaryHeader.module.scss";
import cx from "classnames";

function TabPrimaryHeader({
  tabList = [],
  activeTab,
  onPrimaryTabClick,
  onCloseTabClick,
  onAddTabClick,
  tabWrapperRef,
}) {
  return (
    <div className={styles.tabWrapper} ref={tabWrapperRef}>
      {tabList?.length
        ? tabList?.map((tabItem, index) => (
            <div
              key={tabItem?.id}
              className={cx(styles.tabHeader, {
                [styles.tabHeaderActive]: tabItem.id === activeTab?.id,
              })}
              onClick={() => onPrimaryTabClick(tabItem)}
            >
              <div className={styles.title}>Tab Header - {tabItem.title} </div>
              <img
                src="/images/sidebar/CrossIcon.webp"
                className={styles.closeTab}
                alt={"cross"}
                onClick={(event) => onCloseTabClick(event, tabItem, index)}
              ></img>

              <div className={styles.separator}></div>
            </div>
          ))
        : null}
      <img
        src="/images/sidebar/CrossIcon.webp"
        className={styles.addTab}
        alt={"cross"}
        onClick={onAddTabClick}
      ></img>
    </div>
  );
}

export default TabPrimaryHeader;
