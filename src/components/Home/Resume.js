import styles from "./Resume.module.scss";

export default function Resume() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.lhs}>
        <h2 className={styles.heading}> Experience </h2>
        <div className={styles.resumeItem}>
          <strong>BYJU’s - </strong>
          <i>Senior Software Engineer </i>
          <div className={styles.duration}>Jun 2022 - Present</div>
          Working as a Frontend Engineer handling the core website, legacy and
          the new one.
        </div>
        <div className={styles.resumeItem}>
          <strong>Toppr — </strong>
          <i> Software Engineer</i>
          <div className={styles.duration}>July 2020 - Jun 2022</div>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <h3>Google Assistant Project</h3>
              <p>
                Integrated a React application with Google Assistant. Gets
                activated by saying ‘Talk to Toppr Answr’.
              </p>
            </li>
          </ul>
          Doubts on Chat : Built the client side of a chat service, used for
          solving doubts of students ( used Websockets ) Page Performance/Speed
          : Worked on improving page speed and performance of question pages
          (server side rendered) on Toppr Ask. Improved SEO ranking. Blog Link
          Live-Tests : Built complete flow for Live tests and user profile. Auth
          Flow: Built complete auth/login/onboarding flow for users Textbooks
          Exercise : Worked on several screens involving Books, their exercises
          solutions screens : making pages SEO compatible.
        </div>
        <h2 className={styles.heading}> Projects </h2>
      </div>
      <div className={styles.rhs}>
        <h2 className={styles.heading}> Education </h2>
        <h2 className={styles.heading}> Skills </h2>
        <h2 className={styles.heading}> Achievements </h2>
      </div>
    </div>
  );
}
