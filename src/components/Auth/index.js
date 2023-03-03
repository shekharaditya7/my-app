import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GoogleLogin from "./GoogleLogin";

import { loginApi, signupApi } from "./../../api";

import { STEPS } from "./auth.constants";

import styles from "./index.module.scss";
import CircularLoader from "../Widgets/CircularLoader";

export default function Auth() {
  const [authData, setAuthData] = useState({});
  const [isOauthInProgress, setIsOauthInProgress] = useState(false);
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

    setAuthData({ isLoading: true });
    const data = await loginApi({ email, password });

    if (data) {
      setAuthData({ ...data, isLoading: false });
      if (data.user) sessionStorage.setItem("user", JSON.stringify(data.user));
    } else setAuthData({ isLoading: false, message: "Something went wrong" });
    setTimeout(() => {
      setAuthData((prevData) => {
        return { ...prevData, message: "" };
      });
    }, 2000);
  };

  const handleSignupClick = async ({ name, email, password }) => {
    if (!email || !name || !password) return;

    setAuthData({ isLoading: true });
    const data = await signupApi({ name, email, password });

    if (data) {
      setAuthData({ ...data, isLoading: false });
      if (data.user) sessionStorage.setItem("user", JSON.stringify(data.user));
    } else setAuthData({ isLoading: false, message: "Something went wrong" });
    setTimeout(() => {
      setAuthData((prevData) => {
        return { ...prevData, message: "" };
      });
    }, 2000);
  };

  const handleGoogleLoginClick = async () => {
    const module = await import("./Google-Sign-In");
    const popupSignIn = module.default;
    popupSignIn(setIsOauthInProgress);
    setIsOauthInProgress(true);
  };

  return (
    <div className={styles.authWrapper}>
      {isOauthInProgress ? (
        <CircularLoader size={40} />
      ) : (
        <>
          {authData?.message ? (
            <p className={styles.apiError}>{authData.message}</p>
          ) : null}
          {step === STEPS.SIGNUP ? (
            <Signup
              handleSignupClick={handleSignupClick}
              isLoading={authData?.isLoading}
            />
          ) : step === STEPS.LOGIN ? (
            <Login
              handleLoginClick={handleLoginClick}
              isLoading={authData?.isLoading}
            />
          ) : null}
          <GoogleLogin handleGoogleLoginClick={handleGoogleLoginClick} />
        </>
      )}
    </div>
  );
}
