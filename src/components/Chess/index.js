import { useState } from "react";
import cx from "classnames";
import BOARD, { getMovesByType } from "./chess.constants";
import styles from "./index.module.scss";

export default function Chess() {
  const [chessBoard, setChessboard] = useState(BOARD);
  const handleBoxClick = (row, col) => {
    const { piece } = chessBoard[row][col];
    if (!piece) return;

    const moves = getMovesByType(piece.type, row, col, chessBoard);
    const currChessBoard = [...chessBoard];

    for (let i = 0; i <= 7; i++) {
      for (let j = 0; j <= 7; j++) currChessBoard[i][j].isActive = false;
    }
    chessBoard[row][col].isActive = true;
    if (moves.length) {
      moves.forEach((moveArray) => {
        moveArray.forEach(({ row, col }) => {
          currChessBoard[row][col].isActive = true;
        });
      });
    }
    setChessboard(currChessBoard);
  };
  console.log(chessBoard);
  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        {chessBoard.map((rowItems, row) => {
          return (
            <div className={styles.row} key={row}>
              {rowItems.map(({ piece, color, isActive }, col) => {
                return (
                  <div
                    className={cx(styles.box, { [styles.active]: isActive })}
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
