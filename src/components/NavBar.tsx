// Simple navbar with logo on top left and one button on top right

import React, { useState } from "react";

import { FaPlus } from "react-icons/fa";
import NewGameModal from "./NewGameModal";

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center h-16 text-white relative font-mono">
      <NewGameModal open={isModalOpen} setOpen={setIsModalOpen} />

      <div className="ml-10 text-cyan-400">Patengooo</div>
      <div className="pr-8">
        <button
          className="bg-cyan-400 hover:bg-cyan-500 text-black font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <div className="flex justify-center items-center">
            <FaPlus size={15} />
            <div className="ml-2">New Game</div>
          </div>
        </button>
      </div>
    </div>
  );
}
