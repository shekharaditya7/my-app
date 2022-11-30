import { useState, useRef } from "react";
import cx from "classnames";
import Instructions from "../Widgets/InstructionModal";
import BOARD, { getMovesByType, COLORS } from "./chess.constants";
import styles from "./index.module.scss";

const resetActiveState = (currChessBoard) => {
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) currChessBoard[i][j].isActive = false;
  }
};

export default function Chess() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [chessBoard, setChessboard] = useState(BOARD);
  const pressedPiece = useRef(null);
  const turn = useRef(COLORS.WHITE);

  const handleBoxClick = (row, col) => {
    const { piece } = chessBoard[row][col];
    const currChessBoard = [...chessBoard];

    if (chessBoard[row][col].isActive) {
      // MOVE COMPLETE

      currChessBoard[pressedPiece.current.pressedRow][
        pressedPiece.current.pressedCol
      ].piece = null;
      currChessBoard[row][col].piece = { ...pressedPiece.current.piece };

      //CHANGE TURN
      turn.current =
        turn.current === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE;
      setChessboard(currChessBoard);
      resetActiveState(currChessBoard);
      return;
    }

    if (turn.current !== piece?.color) {
      setShowInstructions(true);
      return;
    }

    resetActiveState(currChessBoard);

    pressedPiece.current = { piece, pressedRow: row, pressedCol: col };
    const moves = getMovesByType(piece.type, row, col, chessBoard);

    //SHOW MOVES
    if (!chessBoard[row][col].isActive) {
      chessBoard[row][col].isActive = true;
      if (moves.length) {
        moves.forEach((moveArray) => {
          moveArray.forEach(({ row, col }) => {
            currChessBoard[row][col].isActive = true;
          });
        });
      }
    }
    setChessboard(currChessBoard);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.board}>
        {chessBoard.map((rowItems, row) => {
          return (
            <div className={styles.row} key={row}>
              {rowItems.map(({ piece, color, isActive }, col) => {
                return (
                  <div
                    className={cx(styles.box, {
                      [styles.active]: isActive,
                      [styles.pointer]: !!piece,
                      [styles.dark]: color === COLORS.BLACK,
                    })}
                    key={col}
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
      {showInstructions ? (
        <Instructions
          title={"Oops!"}
          instructions={[`It's ${turn.current} color's turn!`]}
          onClose={() => setShowInstructions(false)}
        />
      ) : null}
    </div>
  );
}
