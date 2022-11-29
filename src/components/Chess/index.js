import { useRef } from "react";
import cx from "classnames";
import BOARD, { getMovesByType } from "./chess.constants";
import styles from "./index.module.scss";

export default function Chess() {
  const chessBoard = useRef(BOARD);
  const handleBoxClick = (row, col) => {
    const { piece } = chessBoard.current[row][col];
    if (!piece) return;

    console.log(getMovesByType(piece.type, row, col, chessBoard.current));
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        {chessBoard.current.map((rowItems, row) => {
          return (
            <div className={styles.row} key={row}>
              {rowItems.map(({ piece, color }, col) => {
                return (
                  <div
                    className={cx(styles.box)}
                    key={col}
                    style={{
                      backgroundColor: color === "black" ? "green" : "white",
                      cursor: piece ? "pointer" : "initial",
                      // backgroundImage:
                      //   color === "black"
                      //     ? "linear-gradient(120deg, rgb(0, 0, 0) 0%, rgb(3 178 27) 100%)"
                      //     : "white",
                    }}
                    onClick={() => handleBoxClick(row, col)}
                  >
                    {piece?.logoSrc ? (
                      <img
                        src={piece?.logoSrc}
                        alt="ok"
                        className={cx(styles.pieceImg, {
                          [styles.whitePieceImg]: piece?.color === "white",
                          [styles.blackPieceImg]: piece?.color === "black",
                        })}
                      ></img>
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
