import cx from "classnames";
import styles from "./Button.module.scss";
import CircularLoader from "./CircularLoader";

export default function Button({
  label = "Click",
  className,
  onClick,
  isLoading,
  children,
  isDisabled = false,
}) {
  return (
    <button
      className={cx(styles.btn, className, {
        [styles.disabled]: isDisabled,
        [styles.loading]: isLoading,
      })}
      onClick={isLoading || isDisabled ? null : (event) => onClick({ event })}
    >
      {isLoading ? <CircularLoader /> : label}
      {children}
    </button>
  );
}
