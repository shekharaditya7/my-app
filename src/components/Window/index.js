import { useEffect, useRef, useState } from "react";
import TabPrimaryHeader from "./TabPrimaryHeader";
import TabPrimaryContent from "./TabPrimaryContent";

import { TAB_ACTIONS, TAB_DATA } from "./window.constants";

import styles from "./index.module.scss";

function Window() {
  const [activeTab, setActiveTab] = useState(null);
  const [tabList, setTabList] = useState([...TAB_DATA]);
  const tabWrapperRef = useRef(null);
  const tabActions = useRef(null);

  useEffect(() => {
    const len = tabList?.length;

    if (len && !tabActions.current) setActiveTab(tabList[0]);
    switch (tabActions.current) {
      case TAB_ACTIONS.ADD:
        setActiveTab(tabList[len - 1]);
        tabWrapperRef?.current.scrollBy({
          left: tabWrapperRef?.current?.clientWidth || 0,
          behaviour: "smooth",
        });
        break;
      case TAB_ACTIONS.CLOSE:
        if (len) {
          setActiveTab(tabList[len - 1]);
        }
        break;
      case TAB_ACTIONS.CLICK:
      default:
        break;
    }
    tabActions.current = null;
  }, [tabList]);

  console.log(activeTab);

  const getActiveTabData = () => {
    let activeTabData = {};
    if (!activeTab) return activeTabData;
    tabList.forEach((tabItem) => {
      if (tabItem.id === activeTab.id) activeTabData = tabItem;
    });
    return activeTabData;
  };

  const handleTabClick = (tabItem) => {
    if (tabItem.id === activeTab?.id) return;
    tabActions.current = TAB_ACTIONS.CLICK;
    setActiveTab(tabItem);
  };

  const handleTabCloseClick = (event, tabItem, index) => {
    event.stopPropagation();
    const deleteTabId = tabItem?.id;
    if (deleteTabId) {
      const len = tabList.length;
      let deletedTabIndex = null;
      const remainingItems = tabList.filter(
        (tabItem) => deleteTabId !== tabItem.id
      );
      for (let idx = 0; idx < len; idx++) {
        if (deleteTabId === tabList[idx]?.id) {
          deletedTabIndex = idx;
          break;
        }
      }
      if (deleteTabId === activeTab?.id) {
        if (deletedTabIndex < len - 1)
          // There are tabs available
          setActiveTab(tabList[deletedTabIndex + 1]);
        else setActiveTab(null);
      }
      setTabList([...remainingItems]);
      tabActions.current = TAB_ACTIONS.CLOSE;
    }
  };

  const handleAddTabClick = () => {
    tabActions.current = TAB_ACTIONS.ADD;
    setTabList([...tabList, { id: Math.random(), title: "5", subTitle: "E" }]);
  };

  return (
    <div className={styles.window}>
      <TabPrimaryHeader
        tabList={tabList}
        activeTab={activeTab}
        onPrimaryTabClick={handleTabClick}
        onCloseTabClick={handleTabCloseClick}
        onAddTabClick={handleAddTabClick}
        tabWrapperRef={tabWrapperRef}
      />
      <TabPrimaryContent tabData={getActiveTabData()} />
    </div>
  );
}

export default Window;
