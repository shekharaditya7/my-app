import styles from "./Intro.module.scss";
export default function Intro() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img
          src="/images/intro/profile.PNG"
          alt="profile"
          height={120}
          width={96}
          className={styles.profile}
        ></img>
        <div className={styles.description}>
          <h2> Hi, I'm Aditya Shekhar </h2>
          <p>
            I'm currently working at BYJU’s (Think and Learn Pvt. Limited) as a
            Senior Software Engineer (Full Stack)
          </p>
          <div className={styles.contact}>
            <div className={styles.phone}>
              <img
                src="/images/intro/call-icon.jpeg"
                alt="call"
                className={styles.phoneImg}
              ></img>
              <span>7979972041</span>
            </div>
            <div className={styles.phone}>
              <img
                src="/images/intro/email-icon.png"
                alt="email"
                className={styles.phoneImg}
              ></img>
              <a href="mailto:shekharaditya7@gmail.com">
                shekharaditya7@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.phone}>
          <img
            src="/images/intro/call-icon.jpeg"
            alt="call"
            className={styles.phoneImg}
          ></img>
          <span>7979972041</span>
        </div>
        <div className={styles.phone}>
          <img
            src="/images/intro/email-icon.png"
            alt="email"
            className={styles.phoneImg}
          ></img>
          <span>shekharaditya7@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
