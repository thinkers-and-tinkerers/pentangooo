import { type } from "os"

export type PieceMove = {
  name: string
  quadrant: number
  position: number
}

export type RotationMove = {
  name: string
  quadrant: number
  direction: string
}

export type GameData = {
  id: number
  name: string
  quadrants: string[]
  turn: string
  winner: string
}

export type PieceProps = {
  quadrant: number
  position: number
  color: string
  addPiece?: (quadrant: number, position: number) => void
}

export type QuadrantProps = {
  quadrant: number
  pieces: PieceProps[]
  addPiece?: (quadrant: number, position: number) => void
  rotateQuadrant?: (quadrant: number, direction: string) => void
}

export type BoardProps = {
  quadrants: QuadrantProps[]
  addPiece?: (quadrant: number, position: number) => void
  rotateQuadrant?: (quadrant: number, direction: string) => void
}
export type RotationButtonProps = {
  quadrant: number
  direction: string
  disabled: boolean
  rotateQuadrant?: (quadrant: number, direction: string) => void
}
