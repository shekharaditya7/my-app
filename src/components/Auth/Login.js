import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Widgets/Button";
import validateFormData from "./../../utils/validateFormData";
import styles from "./index.module.scss";

export default function Login({ handleLoginClick, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLoginButtonClick = () => {
    const errors = validateFormData({ email, password });
    if (!errors.email && !errors.password) {
      handleLoginClick({ email, password });
    } else setErrors({ ...errors });
  };

  const handleResetError = (fieldName) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors, [fieldName]: "" };
      return newErrors;
    });
  };

  const handleOnChange = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }

    const errors = validateFormData({ [fieldName]: value });
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [fieldName]: errors[fieldName],
      };
    });
  };

  const handleBlur = (fieldName) => {
    let value;
    switch (fieldName) {
      case "email":
        value = email;
        break;
      case "password":
        value = password;
        break;
      default:
        break;
    }

    const errors = validateFormData({ [fieldName]: value });
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        [fieldName]: errors[fieldName],
      };
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.fieldWrapper}>
          <input
            type="email"
            value={email}
            className={styles.urlInput}
            placeholder="Email*"
            onChange={(event) => handleOnChange("email", event.target.value)}
            onFocus={() => handleResetError("email")}
            onBlur={() => handleBlur("email")}
          ></input>
          {errors?.email ? (
            <p className={styles.error}>{errors.email}</p>
          ) : null}
        </div>
        <div className={styles.fieldWrapper}>
          <input
            type="password"
            value={password}
            className={styles.urlInput}
            placeholder="Password*"
            onChange={(event) => handleOnChange("password", event.target.value)}
            onFocus={() => handleResetError("password")}
            onBlur={() => handleBlur("password")}
          ></input>
          {errors?.password ? (
            <p className={styles.error}>{errors.password}</p>
          ) : null}
        </div>

        <div className={styles.footer}>
          <Button
            onClick={() => handleLoginButtonClick({ email, password })}
            label="Login"
            isLoading={isLoading}
          />
          <Link to="/auth/signup/"> Sign up</Link>
        </div>
      </div>
    </div>
  );
}
