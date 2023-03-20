import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";

import Board from "../../components/Board";
import { BoardProps } from "../../types/types";

import { startingState } from "../../utils";

export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const response = await fetch(`api/game/${context.params?.name}`);
  //   const responseData = await response.json();
  //   if (!context.params?.name) {
  //     return {
  //       redirect: {
  //         destination: "/",
  //         permanent: false,
  //       },
  //     };
  //   }

  console.log(context.params?.name);
  return {
    props: { name: "hi" },
  };
};

export default function Home({ name }: { name: string }) {
  console.log("I MADE IT HERE");
  console.log(name);
  const [state, setState] = useState<BoardProps>(startingState);
  const [gameName, setGameName] = useState<string>(name);

  const addPiece = async (quadrant: number, position: number) => {
    console.log(
      `name: ${gameName}, quadrant: ${quadrant}, position: ${position}`
    );
    const response = await fetch("/api/place", {
      method: "POST",
      body: JSON.stringify({
        name: gameName,
        quadrant: quadrant,
        position: position,
      }),
    });
    setState(await response.json());
  };

  const rotateQuadrant = async (quadrant: number) => {
    console.log(`name: ${gameName}, quadrant: ${quadrant}`);
    const response = await fetch("/api/rotate", {
      method: "POST",
      body: JSON.stringify({
        name: gameName,
        quadrant: quadrant,
      }),
    });
    setState(await response.json());
  };

  return (
    <>
      <Head>
        <title>pantengooo</title>
        <meta name="description" content="Play it if you dare" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex justify-center items-center">
          <Board
            quadrants={state.quadrants}
            addPiece={addPiece}
            rotateQuadrant={rotateQuadrant}
          />
        </div>
      </main>
    </>
  );
}
