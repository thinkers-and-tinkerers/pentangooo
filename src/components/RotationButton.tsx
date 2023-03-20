// Button that shows a rotation icon

import React from "react";

import { RotationButtonProps } from "../types/types";

// import GiAnticlocksiseRotation from "react-icons/gi";
// import GiClockwiseRotation from "react-icons/gi";

import { GiAnticlockwiseRotation, GiClockwiseRotation } from "react-icons/gi";
export default function RotationButton({
  quadrant,
  direction,
  rotateQuadrant,
  disabled,
}: RotationButtonProps) {
  return (
    <button
      className="bg-black hover:bg-slate-100/[0.2] h-12 w-12 text-white font-bold rounded-full"
      onClick={() => {
        if (rotateQuadrant) {
          rotateQuadrant(quadrant, direction);
        }
      }}
      disabled={disabled}
    >
      <div className="flex justify-center items-center h-12 w-12">
        {direction === "CCW" && <GiAnticlockwiseRotation size={25} />}
        {direction === "CW" && <GiClockwiseRotation size={25} />}
      </div>
    </button>
  );
}
