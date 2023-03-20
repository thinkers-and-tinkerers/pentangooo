import { BoardProps } from "./types/types";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const startingState: BoardProps = {
  name: "board",
  quadrants: [
    {
      name: "board",
      quadrant: 0,
      pieces: [
        {
          name: "board",
          quadrant: 0,
          position: 0,
          color: "bg-white",
        },
        {
          name: "board",
          quadrant: 0,
          position: 1,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 0,
          position: 2,
          color: "bg-white",
        },
        {
          name: "board",
          quadrant: 0,
          position: 3,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 0,
          position: 4,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 0,
          position: 5,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 0,
          position: 6,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 0,
          position: 7,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 0,
          position: 8,
          color: "bg-cyan-500",
        },
      ],
    },
    {
      name: "board",
      quadrant: 1,
      pieces: [
        {
          name: "board",
          quadrant: 1,
          position: 0,
          color: "bg-cyan-500",
        },

        {
          name: "board",
          quadrant: 1,
          position: 1,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 1,
          position: 2,
          color: "bg-black",
        },
        {
          name: "board",
          quadrant: 1,
          position: 3,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 1,
          position: 4,
          color: "bg-white",
        },
        {
          name: "board",
          quadrant: 1,
          position: 5,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 1,
          position: 6,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 1,
          position: 7,
          color: "bg-black",
        },
        {
          name: "board",
          quadrant: 1,
          position: 8,
          color: "bg-cyan-500",
        },
      ],
    },
    {
      name: "board",
      quadrant: 2,
      pieces: [
        {
          name: "board",
          quadrant: 2,
          position: 0,
          color: "bg-black",
        },

        {
          name: "board",
          quadrant: 2,
          position: 1,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 2,
          position: 2,
          color: "bg-black",
        },
        {
          name: "board",
          quadrant: 2,
          position: 3,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 2,
          position: 4,
          color: "bg-white",
        },
        {
          name: "board",
          quadrant: 2,
          position: 5,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 2,
          position: 6,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 2,
          position: 7,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 2,
          position: 8,
          color: "bg-cyan-500",
        },
      ],
    },
    {
      name: "board",
      quadrant: 3,
      pieces: [
        {
          name: "board",
          quadrant: 3,
          position: 0,
          color: "bg-cyan-500",
        },

        {
          name: "board",
          quadrant: 3,
          position: 1,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 3,
          position: 2,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 3,
          position: 3,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 3,
          position: 4,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 3,
          position: 5,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 3,
          position: 6,
          color: "bg-white",
        },
        {
          name: "board",
          quadrant: 3,
          position: 7,
          color: "bg-cyan-500",
        },
        {
          name: "board",
          quadrant: 3,
          position: 8,
          color: "bg-cyan-500",
        },
      ],
    },
  ],
};
