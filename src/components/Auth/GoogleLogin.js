import styles from "./index.module.scss";

export default function GoogleLogin({ handleGoogleLoginClick }) {
  return (
    <div className={styles.googleWrapper} onClick={handleGoogleLoginClick}>
      <img src="/images/google.png" alt="google sign in"></img>
      Sign in with Google
    </div>
  );
}
