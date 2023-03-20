import React from "react";
import { QuadrantProps } from "../types/types";
import Piece from "./Piece";
import RotationButtonGroup from "./RotationButtonGroup";

export default function Quadrant({
  quadrant,
  pieces,
  addPiece,
  rotateQuadrant,
}: QuadrantProps) {
  return (
    <div className="relative">
      <RotationButtonGroup quadrant={quadrant} />
      <div className="flex justify-center rounded items-center p-2 grid grid-cols-3 grid-rows-3 gap-2 bg-cyan-500">
        {pieces.map((piece, index) => {
          return (
            <Piece
              key={index}
              quadrant={quadrant}
              position={piece.position}
              color={piece.color}
              addPiece={addPiece}
            />
          );
        })}
      </div>
    </div>
  );
}
