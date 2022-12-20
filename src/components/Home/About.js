import cx from "classnames";
import styles from "./About.module.scss";

const ACTION_ITEMS = [
  {
    logoSrc: "/images/intro/web-dev.png",
    title: "Web Development",
    description:
      "Interested in web engineering, SEO - working heavily on server side rendered pages, and their performance & optimizations.",
  },
  {
    logoSrc: "/images/intro/open-source.png",
    title: "Open Source Projects",
    description:
      "An active open-source contributor, contributing to projects around Javascript tools and libraries.",
  },
  {
    logoSrc: "/icon192.jpeg",
    title: "Others",
    description:
      "I'm a singer, and I also play the guitar, the ukelele and the piano. I like trekking, travelling and cooking. Leisurely, I play badminton.",
  },
];

const ACTION_ITEMS_EDUCATION = [
  {
    logoSrc: "/images/intro/iit-dhn.png",
    title: "Indian Institute Of Technology (ISM), Dhanbad",
    duration:
      "Bachelor of Technology, Computer Science and Engineering : 2016 — 2020",
    description:
      "Major Subjects : Data Structures, Algorithms, Object Oriented Programming, Operating Systems, Database Management and Systems, Distributed Systems, Discrete Mathematics, Calculus.",
  },
  {
    logoSrc: "/images/intro/dav.png",
    title: "DAV Public School, Koylanagar, Dhanbad",
    duration: "Senior Secondary School (Science) : 2014 - 2016",
    description:
      "Subjects : Mathematics, Physics, Chemistry, Physical Education, English, Informatics Practices.",
  },
];

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.subHeader}>About Me</h2>
        <div className={styles.separator}></div>
      </div>
      <div className={styles.section}>
        Experienced Software Engineer with a demonstrated history of working in
        the e-learning industry. Skilled in Front-end Development, Algorithms,
        and Competitive Programming. Strong engineering professional with a
        Bachelor's degree focused in Computer Science from IIT (ISM), Dhanbad.
      </div>
      <div className={styles.subHeader}>What I do</div>
      <div className={styles.whatIdo}>
        {ACTION_ITEMS.map(({ logoSrc, title, description }) => (
          <div className={styles.actionItem}>
            <img src={logoSrc} alt={"logo"}></img>
            <div className={styles.meta}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.education}>
        <div className={styles.subHeader}>Education</div>
        {ACTION_ITEMS_EDUCATION.map(
          ({ logoSrc, title, description, duration }, index) => (
            <div
              className={cx(styles.actionItem, {
                [styles.leftBorder]:
                  index !== ACTION_ITEMS_EDUCATION.length - 1,
              })}
            >
              <img loading={"lazy"} src={logoSrc} alt={"logo"}></img>
              <div className={styles.meta}>
                <h3>{title}</h3>
                <p className={styles.duration}>{duration}</p>
                <p className={styles.description}>{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
