import React, { useState } from "react";
import { ClipboardIcon } from "@heroicons/react/24/outline";

import Notification from "./Notification";

export default function Share({ name }: { name: string }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Notification show={show} setShow={setShow} />
      <div className="flex justify-center items-center">
        <div className="">Share this link with your friends:</div>
        <div className="ml-2">
          <button
            className="flex items-center text-cyan-400 hover:text-cyan-500"
            onClick={() => {
              navigator.clipboard.writeText(
                `https://patengooo.vercel.app/${name}`
              );
              setShow(true);
            }}
          >
            {`https://patengooo.vercel.app/${name}`}
            <ClipboardIcon className="ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
