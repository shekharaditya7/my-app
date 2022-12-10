import Modal from "../Widgets/Modal";
import cx from "classnames";
import styles from "./ProfileModal.module.scss";

const instructions = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adi-shekhar/",
    logoSrc: "/images/social/LinkedIn.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/shekharaditya7",
    logoSrc: "/images/social/Github.png",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/adiShekhar7",
    logoSrc: "/images/social/Twitter.webp",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/adishekhar7/",
    logoSrc: "/images/social/Instagram.png",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/aditya.shekhar.900/",
    logoSrc: "/images/social/Facebook.png",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCQgmjueN1xH1WG8nHYeuZ6g",
    logoSrc: "/images/sidebar/YoutubeIcon.webp",
  },
];

export default function ProfileModal({ onClose, className } = {}) {
  return (
    <Modal
      onRequestClose={onClose}
      className={cx(styles.modal, className)}
      shouldCloseOnEscape={false}
      crossButtonClassName={styles.crossButtonClassName}
      animate={false}
    >
      <div className={styles.title}> Let's connect on </div>
      <ul>
        {instructions.map(({ logoSrc, name, href }, index) => (
          <a
            key={index}
            className={styles.step}
            href={href}
            target={"_blank"}
            rel="noreferrer"
          >
            <img src={logoSrc} alt={"name"}></img>
            <div href={href}>{name}</div>
          </a>
        ))}
      </ul>
    </Modal>
  );
}
