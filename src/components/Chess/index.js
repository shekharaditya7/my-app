import BOARD from "./chess.constants";
import styles from "./index.module.scss";

export default function Chess() {
  const handleBoxClick = (e) => {
    console.log(e);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        {BOARD.map((item, row) => {
          return (
            <div className={styles.row} key={row}>
              {BOARD[row].map(({ piece, color }, col) => {
                return (
                  <div
                    className={styles.box}
                    key={col}
                    style={{
                      backgroundColor: color === "black" ? "green" : "white",
                      cursor: piece ? "pointer" : "initial",
                    }}
                    onClick={handleBoxClick}
                  >
                    {piece?.logoSrc ? (
                      <img src={piece?.logoSrc} alt="ok"></img>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
