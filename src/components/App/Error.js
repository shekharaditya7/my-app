import styles from "./Error.module.scss";

export default function Error({
  statusCode = "400",
  title = "Something went wrong!",
}) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.statusCode}> {statusCode}</h1>
      <p className={styles.title}>{title} </p>
    </div>
  );
}
