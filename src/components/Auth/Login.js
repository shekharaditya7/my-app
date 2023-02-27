import { useState } from "react";
import { Link } from "react-router-dom";
import validateFormData from "./../../utils/validateFormData";
import styles from "./Login.module.scss";

export default function Login({ handleLoginClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);

  const handleLoginButtonClick = () => {
    const errors = validateFormData({ email, password });
    if (!errors.email && !errors.password) {
      handleLoginClick({ email, password });
    } else setErrors({ ...errors });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.fieldWrapper}>
          <input
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className={styles.urlInput}
            placeholder="Email"
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
            placeholder="Password"
          ></input>
          {errors?.password ? (
            <p className={styles.error}>{errors.password}</p>
          ) : null}
        </div>

        <div className={styles.footer}>
          <button onClick={() => handleLoginButtonClick({ email, password })}>
            Login
          </button>
          <Link to="/auth/signup/"> Sign up</Link>
        </div>
      </div>
    </div>
  );
}
