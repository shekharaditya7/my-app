import { useState } from "react";
import cx from "classnames";
import styles from "./NewIntro.module.scss";

export default function Intro() {
  const [showContacts, setShowContacts] = useState(false);
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
          <h2> Aditya Shekhar </h2>
          <p>Senior Software Engineer, BYJU'S</p>
        </div>
      </div>
      <div
        className={styles.arrow}
        onClick={() => setShowContacts((prev) => !prev)}
      >
        <p>Show Contacts</p> <span>{"\u2304"}</span>
      </div>

      <div
        className={cx(styles.contact, {
          [styles.animateContact]: showContacts,
        })}
      >
        <div className={styles.email}>
          <img src={"/images/intro/mail.png"} alt="email"></img>
          <span className={styles.cta}>
            <span>EMAIL</span> <br />
            <a href="mailto:shekharaditya7@gmail.com">
              shekharaditya7@gmail.com
            </a>
          </span>
        </div>
        <div className={styles.phone}>
          <img src={"/images/intro/phone.png"} alt="phone"></img>
          <span className={styles.cta}>
            <span>PHONE</span> <br /> 7979972041
          </span>
        </div>
      </div>
    </div>
  );
}
