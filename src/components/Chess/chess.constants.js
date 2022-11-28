const BLACK = "black";
const WHITE = "white";

const COLORS = {
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
    type: TYPES.KING,
    logoSrc: "/images/chess/white-king.png",
  },
  {
    id: 5,
    color: COLORS.WHITE,
    type: TYPES.QUEEN,
    logoSrc: "/images/chess/white-queen.png",
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
    { piece: PIECES[0], color: COLORS.BLACK },
    { piece: PIECES[1], color: COLORS.WHITE },
    { piece: PIECES[2], color: COLORS.BLACK },
    { piece: PIECES[3], color: COLORS.WHITE },
    { piece: PIECES[4], color: COLORS.BLACK },
    { piece: PIECES[5], color: COLORS.WHITE },
    { piece: PIECES[6], color: COLORS.BLACK },
    { piece: PIECES[7], color: COLORS.WHITE },
  ],
  [
    { piece: PIECES[8], color: COLORS.WHITE },
    { piece: PIECES[9], color: COLORS.BLACK },
    { piece: PIECES[10], color: COLORS.WHITE },
    { piece: PIECES[11], color: COLORS.BLACK },
    { piece: PIECES[12], color: COLORS.WHITE },
    { piece: PIECES[13], color: COLORS.BLACK },
    { piece: PIECES[14], color: COLORS.WHITE },
    { piece: PIECES[15], color: COLORS.BLACK },
  ],
  [
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
  ],
  [
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
  ],
  [
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
  ],
  [
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
    { color: COLORS.WHITE },
    { color: COLORS.BLACK },
  ],
  [
    { piece: PIECES[24], color: COLORS.BLACK },
    { piece: PIECES[25], color: COLORS.WHITE },
    { piece: PIECES[26], color: COLORS.BLACK },
    { piece: PIECES[27], color: COLORS.WHITE },
    { piece: PIECES[28], color: COLORS.BLACK },
    { piece: PIECES[29], color: COLORS.WHITE },
    { piece: PIECES[30], color: COLORS.BLACK },
    { piece: PIECES[31], color: COLORS.WHITE },
  ],
  [
    { piece: PIECES[16], color: COLORS.WHITE },
    { piece: PIECES[17], color: COLORS.BLACK },
    { piece: PIECES[18], color: COLORS.WHITE },
    { piece: PIECES[19], color: COLORS.BLACK },
    { piece: PIECES[20], color: COLORS.WHITE },
    { piece: PIECES[21], color: COLORS.BLACK },
    { piece: PIECES[22], color: COLORS.WHITE },
    { piece: PIECES[23], color: COLORS.BLACK },
  ],
];

export default BOARD;
