import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import prisma from "../../lib/prisma";

import type { PieceMove, RotationMove, GameState } from "@/types/types";
import Quadrant from "@/components/Quadrant";

export default async function makeQuadrantMove(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const quadrant = Number(req.query.quadrant);
  const direction = String(req.query.direction);

  // Need to get the current gamestate
  try {
    const gameStateRes = await fetch(`/api/gamestate?name=${req.query.name}`);
    const gameState: GameState = await gameStateRes.json();

    gameState.state[quadrant] = rotateQuadrant(
      gameState.state[quadrant],
      direction
    );
    gameState.turn = gameState.turn === "white" ? "black" : "white";

    // TODO: Check if game over
    // gameState.isOver = isGameOver(gameState)

    await prisma.game.update({
      where: { name: req.query.name as string },
      data: { boardState: gameState.state.join("") },
    });

    // TODO: Send updated gameState data back in response

    return res.status(200).json({ message: "Quadrant rotated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error making rotation move" });
  }
}

const rotateQuadrant = (quadrant: string, direction: string): string => {
  let quadrantMatrix = getQuandrantMatrix(quadrant);

  if (direction == "left") {
    let rotatedMatrix = quadrantMatrix[0].map((val, index) =>
      quadrantMatrix.map((row) => row[row.length - 1 - index])
    );
  } else {
    let rotatedMatrix = quadrantMatrix[0].map((val, index) =>
      quadrantMatrix.map((row) => row[index]).reverse()
    );
  }

  return quadrantMatrix.map((row) => row.join("")).join("");
};

const getQuandrantMatrix = (quadrant: string): string[][] => {
  let quadArr = quadrant.split("");
  let quadrantMatrix = quadArr.reduce(
    (rows, key, index) =>
      (index % 3 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows,
    []
  );
  return quadrantMatrix;
};
