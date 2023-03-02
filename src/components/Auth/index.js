import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

import { loginApi, signupApi } from "./../../api";

import { STEPS } from "./auth.constants";

import styles from "./index.module.scss";

export default function Auth({ authApiError }) {
  const [authData, setAuthData] = useState({});
  const { step } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {
    if (step !== STEPS.LOGIN && step !== STEPS.SIGNUP) {
      navigate("/auth/login/");
    }
    const redirectUrl = sessionStorage.getItem("redirectUrl") || "/";
    if (user?.email) {
      sessionStorage.removeItem("redirectUrl");
      navigate(redirectUrl);
    }
  }, [step, navigate, user?.email]);

  const handleLoginClick = async ({ email, password }) => {
    if (!email || !password) return;
    const data = await loginApi({ email, password });

    if (data) {
      setAuthData(data);
      setTimeout(() => {
        setAuthData((prevData) => {
          return { ...prevData, message: "" };
        });
      }, 2000);
      if (data.user) sessionStorage.setItem("user", JSON.stringify(data.user));
    } else setAuthData({});
  };

  const handleSignupClick = async ({ name, email, password }) => {
    if (!email || !name || !password) return;
    const data = await signupApi({ name, email, password });

    if (data) {
      setAuthData(data);
      setTimeout(() => {
        setAuthData((prevData) => {
          return { ...prevData, message: "" };
        });
      }, 2000);
      if (data.user) sessionStorage.setItem("user", JSON.stringify(data.user));
    } else setAuthData({});
  };

  return (
    <div className={styles.wrapper}>
      {authData?.message ? (
        <p className={styles.error}>{authApiError}</p>
      ) : null}
      {step === STEPS.SIGNUP ? (
        <Signup handleSignupClick={handleSignupClick} />
      ) : step === STEPS.LOGIN ? (
        <Login handleLoginClick={handleLoginClick}></Login>
      ) : null}
    </div>
  );
}
