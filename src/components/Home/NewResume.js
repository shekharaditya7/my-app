import { useState } from "react";
import cx from "classnames";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import { TABS, ABOUT, EXPERIENCE, PROJECTS } from "./resume.constants";

import styles from "./NewResume.module.scss";

export default function Resume() {
  const [activeTab, setActiveTab] = useState(ABOUT);

  const renderTabContent = () => {
    if (activeTab === ABOUT) return <About />;
    if (activeTab === EXPERIENCE) return <Experience />;
    if (activeTab === PROJECTS) return <Projects />;
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {TABS.map((tabItem) => (
          <span
            key={tabItem}
            className={cx(styles.tabItem, {
              [styles.active]: tabItem === activeTab,
            })}
            onClick={() => setActiveTab(tabItem)}
          >
            {" "}
            {tabItem}
          </span>
        ))}
      </div>
      {renderTabContent()}
    </div>
  );
}
