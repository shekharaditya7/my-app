import { useState, useRef, useEffect } from "react";
import cx from "classnames";
import Instructions from "../Widgets/InstructionModal";
import ConfirmationModal from "../Widgets/ConfirmationModal";
import BOARD, {
  COLORS,
  LOCAL_CONFIG_KEY,
  REDO_KEY,
  KNOCKED_OUT_BOARD,
} from "./chess.constants";
import {
  resetActiveState,
  willKingBeCheckedAfterMoveByColor,
  isKingCheckedAfterMoveComplete,
  getMovesByType,
} from "./chess.utils";
import playAudio from "../../utils/audio";
import styles from "./index.module.scss";

export default function Chess() {
  const [showInstructions, setShowInstructions] = useState(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [chessBoard, setChessboard] = useState([...BOARD]);
  const pressedPiece = useRef(null);
  const knockedOutPieces = useRef({ ...KNOCKED_OUT_BOARD });
  const turn = useRef(COLORS.WHITE);
  const checkedKingPos = useRef({});

  const isUndoAvailable = !!(
    JSON.parse(localStorage.getItem(LOCAL_CONFIG_KEY))?.length >= 1
  );
  const isRedoAvailable = !!(
    JSON.parse(localStorage.getItem(REDO_KEY))?.length >= 1
  );

  useEffect(() => {
    /*
      Load the previous Saved data from localStorage
    */
    const configData = JSON.parse(localStorage.getItem(LOCAL_CONFIG_KEY)) || [];
    if (
      configData.length &&
      configData[configData.length - 1]?.currChessBoard
    ) {
      setChessboard(configData[configData.length - 1].currChessBoard);
      turn.current = configData[configData.length - 1].currentTurn;
      knockedOutPieces.current =
        configData[configData.length - 1].currKnockedOut;
      checkedKingPos.current =
        configData[configData.length - 1].currCheckedKingPos;
    }
  }, []);

  function addKnockedOutPiece(piece) {
    const pieceColor = piece.color;
    let rowIndex, colIndex;
    const knockedOutArray = knockedOutPieces.current[pieceColor];
    for (let row = 0; row <= 1; row++) {
      for (let col = 0; col <= 7; col++) {
        if (!Object.keys(knockedOutArray[row][col]).length) {
          rowIndex = row;
          colIndex = col;
          break;
        }
      }
      if (rowIndex !== undefined) {
        break;
      }
    }

    knockedOutArray[rowIndex][colIndex] = piece;
    knockedOutPieces.current[pieceColor] = [...knockedOutArray];
  }

  const saveToLocal = (
    currChessBoard,
    currentTurn,
    currKnockedOut,
    currCheckedKingPos
  ) => {
    const prevData = JSON.parse(localStorage.getItem(LOCAL_CONFIG_KEY)) || [];
    const data = {
      currentTurn,
      currChessBoard,
      currKnockedOut,
      currCheckedKingPos,
    };
    localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify([...prevData, data]));
  };

  const handleBoxClick = (row, col) => {
    const { piece } = chessBoard[row][col];
    const currChessBoard = JSON.parse(JSON.stringify(chessBoard));

    if (chessBoard[row][col].isActive) {
      //If clicked on a box that belongs to moves

      if (
        row === pressedPiece.current.pressedRow &&
        col === pressedPiece.current.pressedCol
      ) {
        // clicked on the same piece
        resetActiveState(currChessBoard);
        pressedPiece.current = null;
        setChessboard([...currChessBoard]);
        return;
      }
      // MOVE COMPLETE
      currChessBoard[pressedPiece.current.pressedRow][
        pressedPiece.current.pressedCol
      ].piece = null;
      if (currChessBoard[row][col].piece) {
        addKnockedOutPiece(piece);
      }
      currChessBoard[row][col].piece = { ...pressedPiece.current.piece };
      pressedPiece.current = null;

      //CHANGE TURN
      turn.current =
        turn.current === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE;
      setChessboard([...currChessBoard]);
      resetActiveState(currChessBoard);

      // Check if King got checked
      const { isKingChecked, checkedRow, checkedCol } =
        isKingCheckedAfterMoveComplete(
          turn.current === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE,
          currChessBoard
        );
      if (isKingChecked) {
        checkedKingPos.current = { row: checkedRow, col: checkedCol };
      } else checkedKingPos.current = {};
      saveToLocal(
        currChessBoard,
        turn.current,
        knockedOutPieces.current,
        checkedKingPos.current
      );

      // No need to continue further if King is in CHECK;
      if (isKingChecked) return;

      // Check if KING would get in check if the move gets completed - if YES, revert
      if (
        willKingBeCheckedAfterMoveByColor(
          turn.current === COLORS.WHITE ? COLORS.BLACK : COLORS.WHITE,
          currChessBoard
        )
      ) {
        setShowInstructions({
          instructions: [`Oops! Can't move there.`],
        });
        setTimeout(() => {
          setShowInstructions(null);
        }, 2000);
        handleUndo();
        return;
      }
      playAudio();
      return;
    }

    if (turn.current !== piece?.color) {
      //Turn wise moves only
      if (piece && !pressedPiece?.current?.piece) {
        setShowInstructions({
          instructions: [`It's ${turn.current} color's turn!`],
        });
        setTimeout(() => {
          setShowInstructions(null);
        }, 1500);
      }
      return;
    }

    resetActiveState(currChessBoard);

    pressedPiece.current = { piece, pressedRow: row, pressedCol: col };

    //Display possible Moves
    if (!currChessBoard[row][col].isActive) {
      currChessBoard[row][col].isActive = true;
      const moves = getMovesByType(piece.type, row, col, chessBoard);
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
    localStorage.removeItem(REDO_KEY);
    const baseBoard = JSON.parse(JSON.stringify(BOARD));
    setChessboard(baseBoard);
    turn.current = COLORS.WHITE;
    knockedOutPieces.current = JSON.parse(JSON.stringify(KNOCKED_OUT_BOARD));
    checkedKingPos.current = {};
    setShowConfirmationModal(false);
  };

  const handleUndo = () => {
    const configData = JSON.parse(localStorage.getItem(LOCAL_CONFIG_KEY)) || [];
    const redoList = JSON.parse(localStorage.getItem(REDO_KEY)) || [];
    let lastData;
    if (configData.length) {
      lastData = configData.pop();
    }

    if (
      configData.length &&
      configData[configData.length - 1]?.currChessBoard
    ) {
      turn.current = configData[configData.length - 1].currentTurn;
      knockedOutPieces.current =
        configData[configData.length - 1].currKnockedOut;
      checkedKingPos.current =
        configData[configData.length - 1].currCheckedKingPos;
      setChessboard(configData[configData.length - 1].currChessBoard);
    } else {
      const baseBoard = JSON.parse(JSON.stringify(BOARD));
      setChessboard(baseBoard);
      turn.current = COLORS.WHITE;
      knockedOutPieces.current = JSON.parse(
        JSON.stringify({ ...KNOCKED_OUT_BOARD })
      );
      checkedKingPos.current = {};
    }
    localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify(configData));
    if (lastData)
      localStorage.setItem(REDO_KEY, JSON.stringify([...redoList, lastData]));
  };

  const handleRedo = () => {
    let configData = JSON.parse(localStorage.getItem(LOCAL_CONFIG_KEY)) || [];
    let redoList = JSON.parse(localStorage.getItem(REDO_KEY)) || [];
    let lastData;

    if (redoList.length) {
      lastData = redoList.pop();
    }
    if (lastData) configData = [...configData, lastData];

    if (
      configData.length &&
      configData[configData.length - 1]?.currChessBoard
    ) {
      turn.current = configData[configData.length - 1].currentTurn;
      knockedOutPieces.current =
        configData[configData.length - 1].currKnockedOut;
      checkedKingPos.current =
        configData[configData.length - 1].currCheckedKingPos;
      setChessboard(configData[configData.length - 1].currChessBoard);
    }
    localStorage.setItem(LOCAL_CONFIG_KEY, JSON.stringify(configData));
    localStorage.setItem(REDO_KEY, JSON.stringify([...redoList]));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.whiteDeadWrapper}>
        {knockedOutPieces.current?.[COLORS.WHITE].map((whitePiecesArr, row) => {
          return (
            <div className={styles.whiteCol} key={row}>
              {whitePiecesArr.map((item, col) => {
                return (
                  <div className={styles.deadBox} key={`${row}-${col}`}>
                    {item?.logoSrc ? (
                      <img
                        src={item.logoSrc}
                        className={styles.whitePieceImg}
                        alt="piece"
                      ></img>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className={styles.board}>
        {chessBoard.map((rowItems, row) => {
          return (
            <div className={styles.row} key={row}>
              {rowItems.map(({ piece, color, isActive }, col) => {
                return (
                  <div
                    className={cx(styles.box, {
                      [styles.active]: isActive,
                      [styles.checkedKing]:
                        checkedKingPos?.current?.row === row &&
                        checkedKingPos?.current?.col === col,
                      [styles.pointer]: !!piece,
                      [styles.dark]: color === COLORS.BLACK,
                    })}
                    key={`${row}-${col}`}
                    onClick={() => handleBoxClick(row, col)}
                  >
                    {piece?.logoSrc ? (
                      <img
                        src={piece?.logoSrc}
                        alt="chess-piece"
                        className={cx(styles.pieceImg, {
                          [styles.whitePieceImg]: piece?.color === COLORS.WHITE,
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
      <div className={styles.boardRight}>
        <div className={styles.metaSection}>
          <div
            className={cx(styles.metaItem, {
              [styles.diabledMetaItem]: !isUndoAvailable,
            })}
            onClick={isUndoAvailable ? handleUndo : null}
          >
            Undo
          </div>
          <div
            className={cx(styles.metaItem, {
              [styles.diabledMetaItem]: !isUndoAvailable,
            })}
            onClick={
              isUndoAvailable ? () => setShowConfirmationModal(true) : null
            }
          >
            Reset
          </div>
          <div
            className={cx(styles.metaItem, {
              [styles.diabledMetaItem]: !isRedoAvailable,
            })}
            onClick={handleRedo}
          >
            Redo
          </div>
        </div>
        <div className={styles.blackDeadWrapper}>
          {knockedOutPieces.current?.[COLORS.BLACK].map(
            (blackPiecesArr, row) => {
              return (
                <div className={styles.whiteCol} key={row}>
                  {blackPiecesArr.map((item, col) => {
                    return (
                      <div className={styles.deadBox} key={`${row}-${col}`}>
                        {item?.logoSrc ? (
                          <img
                            src={item.logoSrc}
                            className={styles.blackPieceImg}
                            alt="piece"
                          ></img>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              );
            }
          )}
        </div>
      </div>

      {showInstructions ? (
        <Instructions
          instructions={showInstructions?.instructions}
          className={styles.alert}
          onClose={() => setShowInstructions(null)}
          overlayClassName={styles.alertOverlay}
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
