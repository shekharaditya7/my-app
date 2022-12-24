import cx from "classnames";
import styles from "./Experience.module.scss";

const ACTION_ITEMS = [
  {
    position: "Senior Software Engineer",
    logoSrc: "/images/intro/byjus.png",
    title: "BYJU'S",
    duration: "June 2022 - Present",
    description:
      "Working as a Full Stack Developer handling the legacy website - built on php, Wordpress; and the new web app built on - Next.js, React.js, GraphQL, Strapi (CMS).",
    projectList: [
      {
        subTitle: "Page Performance",
        subDescription:
          "Worked on improving page speed and performance of the Next.js application.",
      },
    ],
  },
  {
    position: "Software Engineer",
    logoSrc: "/images/intro/toppr.png",
    title: "Toppr",
    duration: "July 2020 - June 2022",
    description:
      "Worked as a Frontend Developer, handling multiple verticals and projects - built on Next.js, React.js, SCSS.",
    projectList: [
      {
        subTitle: "Google Assistant Project",
        subDescription:
          "Integrated a React application with Google Assistant. Gets activated by saying ‘Talk to Toppr Answr’.",
      },
      {
        subTitle: "Doubts on Chat",
        subDescription:
          "Built the client side of a chat service, used for solving doubts of students - used Websockets.",
      },
      {
        subTitle: "Page Performance/Speed",
        subDescription:
          "Worked on improving page speed and performance of question pages (server side rendered) on Toppr Ask. Improved SEO ranking.",
        link: {
          url: "https://blog.toppr.com/how-toppr-answr-website-speed-propelled-by-8x-c4b324d0976c",
          label: "Blog Link",
        },
      },
      {
        subTitle: "Live-Tests",
        subDescription:
          "Built complete flow for Live tests and user profile, where user can attempt tests/quizes of different chapters of different subjects.",
      },
    ],
  },
  {
    position: "Software Development Intern",
    logoSrc: "/images/intro/amdocs.jpeg",
    title: "Amdocs",
    duration: "May 2019 - July 2019",
    description:
      "Worked as a summer intern under the Data and Intelligence team to build a future proof data visualization tool for data analytics.",
    projectList: [
      {
        subTitle: "Data Visualization Tool",
        subDescription:
          "A tool used to create dashboards/reports, which connects to various databases, imports/exports data models (Excel), and provides custom visualizations (graphs, charts)",
      },
    ],
  },
];

export default function Experience() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.subHeader}>Experience</h2>{" "}
        <div className={styles.separator}></div>
      </div>
      {ACTION_ITEMS.map(
        (
          { logoSrc, title, description, position, duration, projectList },
          index
        ) => (
          <div
            className={cx(styles.actionItem, {
              [styles.leftBorder]: index !== ACTION_ITEMS.length - 1,
            })}
            key={index}
          >
            <img src={logoSrc} alt={"logo"}></img>
            <div className={styles.meta}>
              <p className={styles.position}>{position}</p>
              <h3>{title}</h3>
              <p className={styles.duration}>{duration}</p>
              <p className={styles.description}>{description}</p>
              {projectList?.length > 0 ? (
                <ul className={styles.projectList}>
                  {projectList.map(({ subTitle, subDescription, link }) => (
                    <li className={styles.projectItem} key={subTitle}>
                      <h4 className={styles.subTitle}>
                        <span className={styles.subHeader}>{subTitle}</span>
                        {" - "}
                        <span className={styles.subDescription}>
                          {subDescription}{" "}
                          {link?.url ? (
                            <a
                              href={link.url}
                              rel="noreferrer"
                              target={"_blank"}
                            >
                              {link.label ?? "Resource Link"}
                            </a>
                          ) : null}
                        </span>
                      </h4>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        )
      )}
    </div>
  );
}
