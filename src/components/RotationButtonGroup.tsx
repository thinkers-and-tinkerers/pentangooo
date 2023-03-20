import React from "react";
import classNames from "classnames";
import RotationButton from "./RotationButton";

export default function RotationButtonGroup({ quadrant, rotateQuadrant }: any) {
  return (
    <div
      className={classNames(
        "absolute",
        {
          "top-0 -left-14": quadrant === 0,
        },
        {
          "top-0 -right-14": quadrant === 1,
        },
        {
          "top-0 -left-14": quadrant === 2,
        },
        {
          "top-0 -right-14": quadrant === 3,
        }
      )}
    >
      <div className="flex flex-col">
        <RotationButton
          quadrant={quadrant}
          direction="CW"
          rotateQuadrant={rotateQuadrant}
        />
        <RotationButton
          quadrant={quadrant}
          direction="CCW"
          rotateQuadrant={rotateQuadrant}
        />
      </div>
    </div>
  );
}
