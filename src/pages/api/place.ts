import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import prisma from "../../lib/prisma";

import type { PieceMove, GameState } from "@/types/types";

export default async function makePieceMove(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gameState = await prisma.game.findUnique({
    where: {
      name: req.query.name as string,
    },
  });

  // IMPLEMENT ME
}
