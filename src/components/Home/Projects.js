import cx from "classnames";
import styles from "./Projects.module.scss";

const ACTION_ITEMS = [
  {
    title: "Data Visualization Tool (DashDesk)",
    duration: "HTML, CSS, Javascript, Python, Django",
    description:
      "A tool used to create dashboards/reports, which connects to various databases, imports/exports data models (Excel), and provides custom visualizations (graphs, charts, grid)",
  },
  {
    title: "Social Web-application",
    duration: "HTML, CSS, Javascript, Python, Django",
    description: "Used django for creating a basic Social app.",
  },
  {
    title: "Student Session Management",
    duration: "HTML, CSS, Javascript, React.js, Django REST",
    description:
      "Used Reactjs and django REST to create a web-application for booking and managing slots for students.",
  },
];

export default function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.subHeader}>Projects</h2>{" "}
        <div className={styles.separator}></div>
      </div>
      {ACTION_ITEMS.map(({ title, description, duration }, index) => (
        <div
          className={cx(styles.actionItem, {
            [styles.leftBorder]: index !== ACTION_ITEMS.length - 1,
          })}
        >
          <div className={styles.dotWrap}>
            {" "}
            <div className={styles.dot}> </div>{" "}
          </div>
          <div className={styles.meta}>
            <h3>{title}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.duration}>
              <span>Tech Stack : </span>
              {duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
