import cx from "classnames";
import styles from "./Button.module.scss";
import CircularLoader from "./CircularLoader";

export default function Button({
  label = "Click",
  className,
  onClick,
  isLoading,
  children,
}) {
  return (
    <button
      className={cx(styles.btn, className)}
      onClick={(event) => onClick({ event })}
    >
      {isLoading ? <CircularLoader /> : label}
      {children}
    </button>
  );
}
