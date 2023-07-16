import styles from "./TabPrimaryContent.module.scss";

function TabPrimaryContent({ tabData = {} }) {
  return (
    <div className={styles.tabContent}>
      {Object.keys(tabData).length ? (
        <div className={styles.tabContent__wrapper}>
          {tabData?.title ? <h2>{tabData.title}</h2> : null}
          {tabData?.subTitle ? <p>{tabData.subTitle}</p> : null}
        </div>
      ) : (
        "No Data"
      )}
    </div>
  );
}

export default TabPrimaryContent;
