import cx from "classnames";
import styles from "./Skills.module.scss";
import { SKILL_ITEMS, ACTION_ITEMS } from "./skills.constants";

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.subHeader}>Skills</h2>{" "}
        <div className={styles.separator}></div>
      </div>
      <div className={styles.skillWrapper}>
        {SKILL_ITEMS.map(({ title, techList, logoSrc }) => (
          <div className={styles.skillItem} key={title}>
            <div>
              <div className={styles.techTitle}>
                <img className={styles.skillImg} src={logoSrc} alt={"logo"} />
                {title}
              </div>
              <div className={styles.skillList}>
                <ul className={styles.skillDescription}>
                  {techList.map((techItem, index) =>
                    index < techList.length / 2 ? (
                      <li className={styles.techItem} key={index}>
                        {techItem}
                      </li>
                    ) : null
                  )}
                </ul>
                <ul className={styles.skillDescription}>
                  {techList.map((techItem, index) =>
                    index > techList.length / 2 ? (
                      <li className={styles.techItem} key={index}>
                        {techItem}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.projects}>
        <h2 className={styles.projectHeader}>Projects</h2>
        {ACTION_ITEMS.map(({ title, description, duration, link }, index) => (
          <div
            className={cx(styles.actionItem, {
              [styles.leftBorder]: index !== ACTION_ITEMS.length - 1,
            })}
            key={index}
          >
            <div className={styles.dotWrap}>
              {" "}
              <div className={styles.dot}> </div>{" "}
            </div>
            <div className={styles.meta}>
              <a href={link.url} target="_blank" rel="noreferrer">
                {title}
              </a>
              <p className={styles.description}>{description}</p>
              {duration.map((item) => (
                <p className={styles.duration} key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
