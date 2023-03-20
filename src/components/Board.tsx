// board that takes in BoardProps

import React from "react";

import Quadrant from "./Quadrant";
import { BoardProps } from "../types/types";

export default function Board({
  quadrants,
  addPiece,
  rotateQuadrant,
}: BoardProps) {
  return (
    <div className="mt-10 grid grid-cols-2 grid-rows-2 m-2 gap-2 aspect-square w-2/5 h-2/5">
      {quadrants.map((quadrant, index) => {
        return (
          <div>
            <Quadrant
              key={index}
              quadrant={quadrant.quadrant}
              pieces={quadrant.pieces}
              addPiece={addPiece}
              rotateQuadrant={rotateQuadrant}
            />
          </div>
        );
      })}
    </div>
  );
}
