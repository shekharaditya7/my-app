import cx from "classnames";
import styles from "./Skills.module.scss";

const SKILL_ITEMS = [
  {
    title: "I'm Good At",
    logoSrc: "/images/intro/web-dev.webp",
    techList: [
      "JavaScript",
      "C++",
      "ReactJS",
      "NextJS",
      "NodeJS",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
  },
  {
    title: "I've Worked On",
    logoSrc: "/images/intro/web-dev.webp",
    techList: [
      "Python",
      "PHP",
      "Django",
      "RemixJS",
      "SQL",
      "Wordpress",
      "TypeScript",
    ],
  },
];

const ACTION_ITEMS = [
  {
    title: "My-App",
    duration: ["HTML", "SCSS", "Javascript", "ReactJS"],
    link: {
      url: "https://github.com/shekharaditya7/my-app",
      label: "Github Link",
    },
    description:
      "Portfolio Website. It includes working examples of quite a few things that I've learnt over time.",
  },
  {
    title: "User Service",
    duration: ["NextJS", "MongoDB", "Javascript"],
    link: {
      url: "https://github.com/shekharaditya7/next-user-service",
      label: "Github Link",
    },
    description: "User service backend for all of my applications.",
  },
  {
    title: "Websocket Server",
    duration: ["ExpressJS", "NodeJS", "Javascript", "Websockets", "Socket-io"],
    link: {
      url: "https://github.com/shekharaditya7/websocket-server",
      label: "Github Link",
    },
    description:
      "An express server that handles websocket connections for live chat.",
  },
  {
    title: "Social Web-application",
    duration: ["HTML", "CSS", "Javascript", "Python", "Django"],
    link: {
      url: "https://github.com/shekharaditya7/socialSite",
      label: "Github Link",
    },
    description:
      "A social media web-application where you can connect with people, and share posts.",
  },
  {
    title: "Student Session Management",
    duration: ["HTML", "CSS", "Javascript", "React.js", "Django REST"],
    link: {
      url: "https://github.com/shekharaditya7/studentSession",
      label: "Github Link",
    },
    description:
      "A web-application for managing slots for students. Students can book to a session with tutors as per the availability.",
  },
];

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
