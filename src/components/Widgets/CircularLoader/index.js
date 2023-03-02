import CircularLoaderIcon from "./CircularLoaderIcon";
import cx from "classnames";
import styles from "./index.module.scss";

const CircularLoader = function ({ className, size = 20, color }) {
  const _className = cx(styles.loader, className);

  return (
    <CircularLoaderIcon
      className={_className}
      width={size}
      height={size}
      style={{ color }}
    />
  );
};

export default CircularLoader;
