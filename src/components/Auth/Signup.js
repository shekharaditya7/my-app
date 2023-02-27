import { useState } from "react";
import { Link } from "react-router-dom";
import validateFormData from "./../../utils/validateFormData";
import styles from "./Signup.module.scss";

export default function Signup({ handleSignupClick }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const handleSignupButtonClick = () => {
    const errors = validateFormData({ email, name, password });
    if (!errors.email && !errors.name && !errors.password) {
      handleSignupClick({ email, name, password });
    } else setErrors({ ...errors });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.fieldWrapper}>
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
            className={styles.urlInput}
            placeholder="Name *"
            required={true}
          ></input>
          {errors?.name ? <p className={styles.error}>{errors.name}</p> : null}
        </div>
        <div className={styles.fieldWrapper}>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className={styles.urlInput}
            placeholder="Email *"
            required={true}
          ></input>
          {errors?.email ? (
            <p className={styles.error}>{errors.email}</p>
          ) : null}
        </div>
        <div className={styles.fieldWrapper}>
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            className={styles.urlInput}
            placeholder="Password *"
            required={true}
          ></input>
          {errors?.password ? (
            <p className={styles.error}>{errors.password}</p>
          ) : null}
        </div>
        <div className={styles.footer}>
          <button onClick={handleSignupButtonClick}>Sign up</button>
          <Link to="/auth/login/"> Login</Link>
        </div>
      </div>
    </div>
  );
}
