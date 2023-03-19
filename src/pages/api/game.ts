// nextjs api endpoint to get prisma.game data on GET and update on POST

import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import prisma from "../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const gameId = req.query.id;
  if (req.method === "GET") {
    const game = await prisma.game.findUnique({
      where: {
        id: gameId as string,
      },
    });
    res.status(200).json(game);
  } else if (req.method === "POST") {
    const game = await prisma.game.update({
      where: {
        id: gameId as string,
      },
      data: {
        name: req.body.name,
      },
    });
    res.status(200).json(game);
  }
}
