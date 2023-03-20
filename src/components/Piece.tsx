import React from "react";
import { PieceProps } from "../types/types";
import classNames from "classnames";

export default function Piece({
  quadrant,
  position,
  color,
  addPiece,
}: PieceProps) {
  console.log(`quadrant: ${quadrant}, position: ${position}, color: ${color}`);
  return (
    <div
      className={classNames(
        "rounded-full w-full h-full aspect-square shadow-md hover:shadow-xl hover:border border border-cyan-400 hover:cursor-pointer",
        color
      )}
      onClick={() => {
        if (addPiece) {
          addPiece(quadrant, position);
        }
      }}
    ></div>
  );
}
