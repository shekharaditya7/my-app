export const LOCAL_CONFIG_KEY = "chess-config";
export const REDO_KEY = "redo-list";
const BLACK = "black";
const WHITE = "white";

export const COLORS = {
  BLACK,
  WHITE,
};

const KING = "king";
const QUEEN = "queen";
const PAWN = "pawn";
const BISHOP = "bishop";
const ROOK = "rook";
const KNIGHT = "knight";

const TYPES = {
  KING,
  QUEEN,
  PAWN,
  BISHOP,
  ROOK,
  KNIGHT,
};

const PIECES = [
  {
    id: 1,
    color: COLORS.WHITE,
    type: TYPES.ROOK,
    logoSrc: "/images/chess/white-rook.png",
  },
  {
    id: 2,
    color: COLORS.WHITE,
    type: TYPES.KNIGHT,
    logoSrc: "/images/chess/white-knight.png",
  },
  {
    id: 3,
    color: COLORS.WHITE,
    type: TYPES.BISHOP,
    logoSrc: "/images/chess/white-bishop.png",
  },
  {
    id: 4,
    color: COLORS.WHITE,
    type: TYPES.QUEEN,
    logoSrc: "/images/chess/white-queen.png",
  },
  {
    id: 5,
    color: COLORS.WHITE,
    type: TYPES.KING,
    logoSrc: "/images/chess/white-king.png",
  },

  {
    id: 6,
    color: COLORS.WHITE,
    type: TYPES.BISHOP,
    logoSrc: "/images/chess/white-bishop.png",
  },
  {
    id: 7,
    color: COLORS.WHITE,
    type: TYPES.KNIGHT,
    logoSrc: "/images/chess/white-knight.png",
  },
  {
    id: 8,
    color: COLORS.WHITE,
    type: TYPES.ROOK,
    logoSrc: "/images/chess/white-rook.png",
  },
  {
    id: 9,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 10,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 11,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 12,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 13,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 14,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 15,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 16,
    color: COLORS.WHITE,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/white-pawn.png",
  },
  {
    id: 17,
    color: COLORS.BLACK,
    type: TYPES.ROOK,
    logoSrc: "/images/chess/black-rook.png",
  },
  {
    id: 18,
    color: COLORS.BLACK,
    type: TYPES.KNIGHT,
    logoSrc: "/images/chess/black-knight.png",
  },
  {
    id: 19,
    color: COLORS.BLACK,
    type: TYPES.BISHOP,
    logoSrc: "/images/chess/black-bishop.png",
  },
  {
    id: 20,
    color: COLORS.BLACK,
    type: TYPES.QUEEN,
    logoSrc: "/images/chess/black-queen.png",
  },
  {
    id: 21,
    color: COLORS.BLACK,
    type: TYPES.KING,
    logoSrc: "/images/chess/black-king.png",
  },

  {
    id: 22,
    color: COLORS.BLACK,
    type: TYPES.BISHOP,
    logoSrc: "/images/chess/black-bishop.png",
  },
  {
    id: 23,
    color: COLORS.BLACK,
    type: TYPES.KNIGHT,
    logoSrc: "/images/chess/black-knight.png",
  },
  {
    id: 24,
    color: COLORS.BLACK,
    type: TYPES.ROOK,
    logoSrc: "/images/chess/black-rook.png",
  },
  {
    id: 25,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
  {
    id: 26,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
  {
    id: 27,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
  {
    id: 28,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
  {
    id: 29,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
  {
    id: 30,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
  {
    id: 31,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
  {
    id: 32,
    color: COLORS.BLACK,
    type: TYPES.PAWN,
    logoSrc: "/images/chess/black-pawn.png",
  },
];

const BOARD = [
  [
    { piece: PIECES[0], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[1], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[2], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[3], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[4], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[5], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[6], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[7], color: COLORS.WHITE, isActive: false },
  ],
  [
    { piece: PIECES[8], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[9], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[10], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[11], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[12], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[13], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[14], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[15], color: COLORS.BLACK, isActive: false },
  ],
  [
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
  ],
  [
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
  ],
  [
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
  ],
  [
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
    { color: COLORS.WHITE, isActive: false },
    { color: COLORS.BLACK, isActive: false },
  ],
  [
    { piece: PIECES[24], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[25], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[26], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[27], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[28], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[29], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[30], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[31], color: COLORS.WHITE, isActive: false },
  ],
  [
    { piece: PIECES[16], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[17], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[18], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[19], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[20], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[21], color: COLORS.BLACK, isActive: false },
    { piece: PIECES[22], color: COLORS.WHITE, isActive: false },
    { piece: PIECES[23], color: COLORS.BLACK, isActive: false },
  ],
];

export const KNOCKED_OUT_BOARD = {
  [COLORS.WHITE]: [
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
  ],
  [COLORS.BLACK]: [
    [{}, {}, {}, {}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}, {}, {}, {}],
  ],
};

function isValidBox(row, col, board, color) {
  return (
    row <= 7 &&
    col <= 7 &&
    row >= 0 &&
    col >= 0 &&
    (!board[row][col].piece || board[row][col].piece.color !== color)
  );
}

function createPoint(row, col) {
  return {
    col,
    row,
  };
}

export function isOpponentPiece(currPiece, piece) {
  return (
    currPiece?.color &&
    piece?.color &&
    ((currPiece.color === COLORS.BLACK && piece.color === COLORS.WHITE) ||
      (currPiece.color === COLORS.WHITE && piece.color === COLORS.BLACK))
  );
}

export function getMovesByType(type, row, col, board) {
  let movesArray = [];
  const color = board[row][col]?.piece?.color;
  switch (type) {
    case TYPES.KING:
      if (isValidBox(row + 1, col + 1, board, color))
        movesArray.push([createPoint(row + 1, col + 1)]);
      if (isValidBox(row + 1, col, board, color))
        movesArray.push([createPoint(row + 1, col)]);
      if (isValidBox(row + 1, col - 1, board, color))
        movesArray.push([createPoint(row + 1, col - 1)]);
      if (isValidBox(row, col - 1, board, color))
        movesArray.push([createPoint(row, col - 1)]);
      if (isValidBox(row - 1, col - 1, board, color))
        movesArray.push([createPoint(row - 1, col - 1)]);
      if (isValidBox(row - 1, col, board, color))
        movesArray.push([createPoint(row - 1, col)]);
      if (isValidBox(row - 1, col + 1, board, color))
        movesArray.push([createPoint(row - 1, col + 1)]);
      if (isValidBox(row, col + 1, board, color))
        movesArray.push([createPoint(row, col + 1)]);
      return movesArray;

    case TYPES.QUEEN: {
      let stopFlag = 0,
        tempMoves = [];

      for (let i = row + 1; i <= 7; i++) {
        if (stopFlag === 0 && isValidBox(i, col, board, color)) {
          tempMoves.push(createPoint(i, col));
          if (isOpponentPiece(board[row][col]?.piece, board[i][col]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, col, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];
      for (let i = row - 1; i >= 0; i--) {
        if (stopFlag === 0 && isValidBox(i, col, board, color)) {
          tempMoves.push(createPoint(i, col));
          if (isOpponentPiece(board[row][col]?.piece, board[i][col]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, col, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];
      for (let j = col + 1; j <= 7; j++) {
        if (stopFlag === 0 && isValidBox(row, j, board, color)) {
          tempMoves.push(createPoint(row, j));
          if (isOpponentPiece(board[row][col]?.piece, board[row][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(row, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];
      for (let j = col - 1; j >= 0; j--) {
        if (stopFlag === 0 && isValidBox(row, j, board, color)) {
          tempMoves.push(createPoint(row, j));
          if (isOpponentPiece(board[row][col]?.piece, board[row][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(row, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);

      //Diagonals
      stopFlag = 0;
      tempMoves = [];

      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; j--, i--) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);

      stopFlag = 0;
      tempMoves = [];

      for (let i = row - 1, j = col + 1; i >= 0 && j <= 7; i--, j++) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);

      stopFlag = 0;
      tempMoves = [];

      for (let i = row + 1, j = col + 1; i <= 7 && j <= 7; i++, j++) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);

      stopFlag = 0;
      tempMoves = [];

      for (let i = row + 1, j = col - 1; i <= 7 && j >= 0; i++, j--) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];

      return movesArray;
    }
    case TYPES.PAWN: {
      const color = board[row][col]?.piece?.color;
      if (color === BLACK) {
        if (row === 6) {
          if (
            isValidBox(row - 1, col, board) &&
            isValidBox(row - 2, col, board) &&
            !isOpponentPiece(
              board[row][col].piece,
              board[row - 1][col].piece
            ) &&
            !isOpponentPiece(board[row][col].piece, board[row - 2][col].piece)
          )
            movesArray.push([
              createPoint(row - 1, col),
              createPoint(row - 2, col),
            ]);
          else if (
            isValidBox(row - 1, col, board, color) &&
            !isOpponentPiece(board[row][col].piece, board[row - 1][col].piece)
          ) {
            movesArray.push([createPoint(row - 1, col)]);
            if (
              isValidBox(row - 2, col, board, color) &&
              !isOpponentPiece(board[row][col].piece, board[row - 2][col].piece)
            )
              movesArray = [...movesArray, createPoint(row - 2, col)];
          }
        } else if (
          row >= 1 &&
          isValidBox(row - 1, col, board, color) &&
          !isOpponentPiece(board[row][col].piece, board[row - 1][col].piece)
        ) {
          movesArray.push([createPoint(row - 1, col)]);
        }

        if (
          isValidBox(row - 1, col - 1, board) &&
          isOpponentPiece(board[row][col].piece, board[row - 1][col - 1].piece)
        ) {
          movesArray.push([createPoint(row - 1, col - 1)]);
        }
        if (
          isValidBox(row - 1, col + 1, board) &&
          isOpponentPiece(board[row][col].piece, board[row - 1][col + 1].piece)
        ) {
          movesArray.push([createPoint(row - 1, col + 1)]);
        }
      } else if (color === WHITE) {
        if (row === 1) {
          if (
            isValidBox(row + 1, col, board) &&
            isValidBox(row + 2, col, board) &&
            !isOpponentPiece(
              board[row][col].piece,
              board[row + 1][col].piece
            ) &&
            !isOpponentPiece(board[row][col].piece, board[row + 2][col].piece)
          )
            movesArray.push([
              createPoint(row + 1, col),
              createPoint(row + 2, col),
            ]);
          else if (
            isValidBox(row + 1, col, board, color) &&
            !isOpponentPiece(board[row][col].piece, board[row + 1][col].piece)
          ) {
            movesArray.push([createPoint(row + 1, col)]);
            if (
              isValidBox(row + 2, col, board, color) &&
              !isOpponentPiece(board[row][col].piece, board[row + 2][col].piece)
            )
              movesArray = [...movesArray, createPoint(row + 2, col)];
          }
        } else if (
          row <= 6 &&
          isValidBox(row + 1, col, board, color) &&
          !isOpponentPiece(board[row][col].piece, board[row + 1][col].piece)
        ) {
          movesArray.push([createPoint(row + 1, col)]);
        }
        if (
          isValidBox(row + 1, col + 1, board) &&
          isOpponentPiece(board[row][col].piece, board[row + 1][col + 1].piece)
        ) {
          movesArray.push([createPoint(row + 1, col + 1)]);
        }
        if (
          isValidBox(row + 1, col - 1, board) &&
          isOpponentPiece(board[row][col].piece, board[row + 1][col - 1].piece)
        ) {
          movesArray.push([createPoint(row + 1, col - 1)]);
        }
      }
      return movesArray;
    }
    case TYPES.BISHOP: {
      let stopFlag = 0;
      let tempMoves = [];

      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; j--, i--) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);

      stopFlag = 0;
      tempMoves = [];

      for (let i = row - 1, j = col + 1; i >= 0 && j <= 7; i--, j++) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);

      stopFlag = 0;
      tempMoves = [];

      for (let i = row + 1, j = col + 1; i <= 7 && j <= 7; i++, j++) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);

      stopFlag = 0;
      tempMoves = [];

      for (let i = row + 1, j = col - 1; i <= 7 && j >= 0; i++, j--) {
        if (stopFlag === 0 && isValidBox(i, j, board, color)) {
          tempMoves.push(createPoint(i, j));
          if (isOpponentPiece(board[row][col]?.piece, board[i][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];

      return movesArray;
    }
    case TYPES.KNIGHT:
      if (isValidBox(row - 2, col + 1, board, color))
        movesArray.push([createPoint(row - 2, col + 1)]);
      if (isValidBox(row - 2, col - 1, board, color))
        movesArray.push([createPoint(row - 2, col - 1)]);
      if (isValidBox(row + 2, col + 1, board, color))
        movesArray.push([createPoint(row + 2, col + 1)]);
      if (isValidBox(row + 2, col - 1, board, color))
        movesArray.push([createPoint(row + 2, col - 1)]);
      if (isValidBox(row - 1, col - 2, board, color))
        movesArray.push([createPoint(row - 1, col - 2)]);
      if (isValidBox(row + 1, col - 2, board, color))
        movesArray.push([createPoint(row + 1, col - 2)]);
      if (isValidBox(row - 1, col + 2, board, color))
        movesArray.push([createPoint(row - 1, col + 2)]);
      if (isValidBox(row + 1, col + 2, board, color))
        movesArray.push([createPoint(row + 1, col + 2)]);
      return movesArray;

    case TYPES.ROOK:
      let stopFlag = 0,
        tempMoves = [];

      for (let i = row + 1; i <= 7; i++) {
        if (stopFlag === 0 && isValidBox(i, col, board, color)) {
          tempMoves.push(createPoint(i, col));
          if (isOpponentPiece(board[row][col]?.piece, board[i][col]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, col, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];
      for (let i = row - 1; i >= 0; i--) {
        if (stopFlag === 0 && isValidBox(i, col, board, color)) {
          tempMoves.push(createPoint(i, col));
          if (isOpponentPiece(board[row][col]?.piece, board[i][col]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(i, col, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];
      for (let j = col + 1; j <= 7; j++) {
        if (stopFlag === 0 && isValidBox(row, j, board, color)) {
          tempMoves.push(createPoint(row, j));
          if (isOpponentPiece(board[row][col]?.piece, board[row][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(row, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];
      for (let j = col - 1; j >= 0; j--) {
        if (stopFlag === 0 && isValidBox(row, j, board, color)) {
          tempMoves.push(createPoint(row, j));
          if (isOpponentPiece(board[row][col]?.piece, board[row][j]?.piece))
            stopFlag = 1;
        } else if (!isValidBox(row, j, board, color)) {
          stopFlag = 1;
        }
      }
      if (tempMoves.length) movesArray.push(tempMoves);
      stopFlag = 0;
      tempMoves = [];
      return movesArray;

    default:
      return movesArray;
  }
}

export default BOARD;
