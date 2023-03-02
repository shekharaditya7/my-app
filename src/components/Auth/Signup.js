import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Widgets/Button";
import validateFormData from "./../../utils/validateFormData";
import styles from "./index.module.scss";

export default function Signup({ handleSignupClick, isLoading }) {
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

  const handleResetError = (fieldName) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors, [fieldName]: "" };
      return newErrors;
    });
  };

  const handleOnChange = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        setName(value);
        break;
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
      case "name":
        value = name;
        break;
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
            type="text"
            value={name}
            className={styles.urlInput}
            placeholder="Name *"
            required={true}
            onChange={(event) => handleOnChange("name", event.target.value)}
            onFocus={() => handleResetError("name")}
            onBlur={() => handleBlur("name")}
          ></input>
          {errors?.name ? <p className={styles.error}>{errors.name}</p> : null}
        </div>
        <div className={styles.fieldWrapper}>
          <input
            type="email"
            value={email}
            className={styles.urlInput}
            placeholder="Email *"
            required={true}
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
            placeholder="Password *"
            required={true}
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
            onClick={handleSignupButtonClick}
            label={"Sign up"}
            isLoading={isLoading}
          />
          <Link to="/auth/login/"> Login</Link>
        </div>
      </div>
    </div>
  );
}
