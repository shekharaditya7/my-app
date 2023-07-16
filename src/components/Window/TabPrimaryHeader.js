import styles from "./TabPrimaryHeader.module.scss";
import cx from "classnames";
import { useRef } from "react";

function TabPrimaryHeader({
  tabList = [],
  activeTab,
  onPrimaryTabClick,
  onCloseTabClick,
  onAddTabClick,
  tabWrapperRef,
  handleDragCallback,
}) {
  const tabItemRef = useRef([]);
  const currDragItem = useRef({});

  const handleDrop = (event, tabItem, index) => {
    handleDragCallback(currDragItem.current, index);
  };

  const handleDragStart = (event, tabItem, index) => {
    currDragItem.current = {
      tabItem,
      index,
    };
  };

  return (
    <div
      className={styles.tabWrapper}
      ref={tabWrapperRef}
      onDragOver={(event) => event.preventDefault()}
    >
      {tabList?.length
        ? tabList?.map((tabItem, index) => (
            <div
              ref={(el) => (tabItemRef.current[index] = el)}
              key={tabItem?.id}
              className={cx(styles.tabHeader, {
                [styles.tabHeaderActive]: tabItem.id === activeTab?.id,
              })}
              onClick={() => onPrimaryTabClick(tabItem)}
              draggable
              onDragStart={(event) => handleDragStart(event, tabItem, index)}
              onDrop={(event) => handleDrop(event, tabItem, index)}
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
