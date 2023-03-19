// type Move
export type PieceMove = {
  name: string;
  quadrant: number;
  position: number;
};

export type RotationMove = {
  name: string;
  quadrant: number;
  direction: number;
};

export type GameState = {
  name: string;
  isOver: boolean;
  winner: string;
  state: string[];
};
