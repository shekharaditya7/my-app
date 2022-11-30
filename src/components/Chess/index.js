import { useState, useRef, useEffect } from "react";
import cx from "classnames";
import Instructions from "../Widgets/InstructionModal";
import ConfirmationModal from "../Widgets/ConfirmationModal";
import BOARD, {
  getMovesByType,
  COLORS,
  LOCAL_CONFIG_KEY,
} from "./chess.constants";
import styles from "./index.module.scss";

const resetActiveState = (currChessBoard) => {
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) currChessBoard[i][j].isActive = false;
  }
};

export default function Chess() {
  const [showInstructions, setShowInstructions] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [chessBoard, setChessboard] = useState(BOARD);
  const pressedPiece = useRef(null);
  const turn = useRef(COLORS.WHITE);

  useEffect(() => {
    const configData = JSON.parse(localStorage.getItem(LOCAL_CONFIG_KEY));
    if (configData?.currChessBoard) {
      setChessboard(configData.currChessBoard);
      turn.current = configData.currentTurn;
    }
  }, []);

  const saveToLocal = (currChessBoard, currentTurn) => {
    const data = {
      currentTurn,
      currChessBoard,
    };
    localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify(data));
  };

  const handleBoxClick = (row, col) => {
    const { piece } = chessBoard[row][col];
    const currChessBoard = [...chessBoard];

    if (chessBoard[row][col].isActive) {
      //If clicked on a box that belongs to moves

      if (
        row === pressedPiece.current.pressedRow &&
        col === pressedPiece.current.pressedCol
      ) {
        // clicked on the same piece
        resetActiveState(currChessBoard);
        setChessboard([...currChessBoard]);
        return;
      }
      // MOVE COMPLETE
      currChessBoard[pressedPiece.current.pressedRow][
        pressedPiece.current.pressedCol
      ].piece = null;
      currChessBoard[row][col].piece = { ...pressedPiece.current.piece };
      pressedPiece.current = null;

      //CHANGE TURN
      turn.current =
        turn.current === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE;
      setChessboard([...currChessBoard]);
      resetActiveState(currChessBoard);
      saveToLocal(currChessBoard, turn.current);
      return;
    }

    if (turn.current !== piece?.color) {
      //Turn wise moves
      if (piece && !pressedPiece?.current?.piece) setShowInstructions(true);
      return;
    }

    resetActiveState(currChessBoard);

    pressedPiece.current = { piece, pressedRow: row, pressedCol: col };
    const moves = getMovesByType(piece.type, row, col, chessBoard);

    //Display possible Moves
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
    setChessboard([...currChessBoard]);
  };

  const handleReset = () => {
    localStorage.removeItem(LOCAL_CONFIG_KEY);
    setChessboard([...BOARD]);
    turn.current = COLORS.WHITE;
    setShowConfirmationModal(false);
  };

  const handleUndo = () => {};

  const handleRedo = () => {};

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
      <div className={styles.metaSection}>
        <div className={styles.metaItem} onClick={handleRedo}>
          Undo
        </div>
        <div
          className={styles.metaItem}
          onClick={() => setShowConfirmationModal(true)}
        >
          Reset
        </div>
        <div className={styles.metaItem} onClick={handleRedo}>
          Redo
        </div>
      </div>
      {showInstructions ? (
        <Instructions
          title={"Oops!"}
          instructions={[`It's ${turn.current} color's turn!`]}
          onClose={() => setShowInstructions(false)}
        />
      ) : null}
      {showConfirmationModal ? (
        <ConfirmationModal
          title={"Are you sure?"}
          items={[
            "All your progress will be lost.",
            "Are you sure you want to reset the game?",
          ]}
          onClose={() => setShowConfirmationModal(false)}
          onYesClick={handleReset}
          onCancelClick={() => setShowConfirmationModal(false)}
        />
      ) : null}
    </div>
  );
}
