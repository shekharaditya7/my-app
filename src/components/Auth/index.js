import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

import { STEPS } from "./auth.constants";
import styles from "./index.module.scss";

export default function Auth({ handleLoginClick, handleSignupClick }) {
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

  return (
    <div className={styles.wrapper}>
      {step === STEPS.SIGNUP ? (
        <Signup handleSignupClick={handleSignupClick} />
      ) : step === STEPS.LOGIN ? (
        <Login handleLoginClick={handleLoginClick}></Login>
      ) : null}
    </div>
  );
}
