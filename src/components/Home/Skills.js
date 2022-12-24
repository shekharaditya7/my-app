import cx from "classnames";
import styles from "./Skills.module.scss";

const SKILL_ITEMS = [
  {
    title: "I'm Good At",
    logoSrc: "/images/intro/web-dev.png",
    techList: [
      "JavaScript",
      "C++",
      "React.js",
      "Next.js",
      "Node.js",
      "HTML",
      "CSS",
      "TailwindCSS",
    ],
  },
  {
    title: "I've Worked On",
    logoSrc: "/images/intro/web-dev.png",
    techList: [
      "Python",
      "PHP",
      "Django",
      "Django REST",
      "Remix.js",
      "SQL",
      "Wordpress",
      "TypeScript",
    ],
  },
];

const ACTION_ITEMS = [
  {
    title: "Social Web-application",
    duration: "HTML, CSS, Javascript, Python, Django",
    link: {
      url: "https://github.com/shekharaditya7/socialSite",
      label: "Github Link",
    },
    description:
      "A social media web-application where you can connect with people, and share posts.",
  },
  {
    title: "Student Session Management",
    duration: "HTML, CSS, Javascript, React.js, Django REST",
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
              <div className={styles.skillDescription}>
                {techList.map((techItem, index) => (
                  <span className={styles.techItem} key={index}>
                    {techItem}
                    {index !== techList?.length - 1 ? "," : "."}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.projects}>
        <h2 className={styles.projectHeader}>Projects</h2>
        {ACTION_ITEMS.map(({ title, description, duration }, index) => (
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
    </div>
  );
}
