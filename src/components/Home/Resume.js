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
              <h3>
                <strong>Google Assistant Project</strong>
              </h3>
              <p>
                Integrated a React application with Google Assistant. Gets
                activated by saying ‘Talk to Toppr Answr’.
              </p>
            </li>
            <li className={styles.listItem}>
              <h3>
                <strong>Doubts on Chat</strong>
              </h3>
              <p>
                Built the client side of a chat service, used for solving doubts
                of students ( used Websockets ).
              </p>
            </li>
            <li className={styles.listItem}>
              <h3>
                <strong>Page Performance/Speed</strong>
              </h3>
              <p>
                Worked on improving page speed and performance of question pages
                (server side rendered) on Toppr Ask. Improved SEO ranking -{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://blog.toppr.com/how-toppr-answr-website-speed-propelled-by-8x-c4b324d0976c"
                >
                  Blog Link
                </a>
              </p>
            </li>
            <li className={styles.listItem}>
              <h3>
                <strong>Live-Tests</strong>
              </h3>
              <p>
                Built complete flow for Live tests and user profile, where user
                can attempt tests/quizes of different chapters of different
                subjects.
              </p>
            </li>
            <li className={styles.listItem}>
              <h3>
                <strong>Auth Flow</strong>
              </h3>
              <p>Built complete auth,login and onboarding flow for users</p>
            </li>
            <li className={styles.listItem}>
              <h3>
                <strong>Textbooks Exercise</strong>
              </h3>
              <p>
                Worked on several screens involving Books, their exercises
                solutions screens : making pages SEO compatible.
              </p>
            </li>
          </ul>
        </div>
        <h2 className={styles.heading}> Projects </h2>
        <div className={styles.resumeItem}>
          <strong>Data Visualization Tool (DashDesk)</strong>
          <div>
            A tool used to create dashboards/reports, which
            <ul>
              <li>Connects to various databases</li>
              <li>Imports/exports data models (Excel)</li>
              <li>Provides custom visualizations (graphs, charts, grid)</li>
            </ul>
          </div>
        </div>
        <div className={styles.resumeItem}>
          <strong>Social Web-application</strong>
          <div>
            Used django for creating a basic Social app.
            <a
              href={"https://github.com/shekharaditya7/socialSite/tree/master"}
              target={"_blank"}
              rel={"noreferrer"}
            >
              Github Link
            </a>
          </div>
        </div>
        <div className={styles.resumeItem}>
          <strong>Student Session Management</strong>
          <div>
            Used Reactjs and django REST to create a web-application for booking
            and managing slots for students.
            <a
              href={
                "https://github.com/shekharaditya7/studentSession/tree/master"
              }
              target={"_blank"}
              rel={"noreferrer"}
            >
              Github Link
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rhs}>
        <h2 className={styles.heading}> Education </h2>
        <div className={styles.resumeItem}>
          <strong>IIT (ISM), Dhanbad - </strong>
          <i>B.Tech, CSE </i>
          <div className={styles.duration}>
            July 2016 - May 2020, <span>CPGA : 8.42 </span>
          </div>
        </div>
        <div className={styles.resumeItem}>
          <strong>Senior Secondary School - </strong>
          <i>C.B.S.E. </i>
          <div className={styles.duration}>
            2016, <span>94.8 %</span>
          </div>
        </div>
        <div className={styles.resumeItem}>
          <strong>Secondary School - </strong>
          <i>C.B.S.E. </i>
          <div className={styles.duration}>
            2014, <span>CGPA : 10</span>
          </div>
        </div>
        <h2 className={styles.heading}> Skills </h2>
        <div className={styles.resumeItem}>
          <ul>
            <li>
              <strong>Strong : </strong>C++, JavaScript, React, HTML, CSS
            </li>
            <li>
              <strong>Intermediate : </strong>Python, SQL, TypeScript
            </li>
            <li>
              <strong>Frameworks: </strong>Nextjs, Remix Js, django, django
              REST, TailwindCSS, Wordpress
            </li>
          </ul>
        </div>

        <h2 className={styles.heading}> Achievements </h2>
        <div className={styles.resumeItem}>
          <ul>
            <li>Awarded for being Relentless @Toppr</li>
            <li>4105 points at Hackerrank</li>
            <li>Among Top-100 in Codeathon-2019, Hackerearth</li>
            <li>
              Secured 3rd Rank (Team PyCharmers) in Amdocs Innovation Lab 3.0
              (2019)
            </li>
          </ul>
        </div>
        <h2 className={styles.heading}> Extracurriculars </h2>
        <div className={styles.resumeItem}>
          <ul>
            <li>Singer</li>
            <li>Guitarist</li>
            <li>Event coordinator at IIT (ISM) Dhanbad</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
