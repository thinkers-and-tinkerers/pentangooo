import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import prisma from "../../lib/prisma";

import type { GameState } from "@/types/types";

export default async function getGameState(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(400).json({ message: "Invalid request method" });
  }
  try {
    const game = await prisma.game.findUnique({
      where: { name: req.query.name as string },
    });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    // Convert single boardState str from DB to 4 quadrant strings
    const boardState = [0, 1, 2, 3].map((i) => game.boardState.slice(i * 9, 9));
    const gameState: GameState = {
      name: game.name,
      turn: game.turn,
      winner: game.winner,
      isOver: game.winner === "" ? false : true,
      state: boardState,
    };
    return res.status(200).json(gameState);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error getting game state" });
  }
}
