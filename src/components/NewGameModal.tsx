import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { generateUsername } from "unique-username-generator";

export default function Example({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: any;
}) {
  const [gameName, setGameName] = useState<string>(generateUsername("-"));
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 mt-3"
                >
                  Game Name
                </label>
                <div className="mt-0">
                  <div className="mt-2 flex rounded-md shadow-sm">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                      <input
                        type="gameName"
                        name="gameName"
                        id="gameName"
                        className="block w-full rounded-l-md border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      onClick={() => setGameName(generateUsername("-"))}
                    >
                      <ArrowPathIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      disabled={gameName.length < 3}
                      className="inline-flex w-full justify-center rounded-md bg-cyan-400 hover:bg-cyan-500 disabled:bg-cyan-400/[0.75] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                      onClick={() => {
                        window.location.href = `/game/${gameName}`;
                        setOpen(false);
                      }}
                    >
                      Start new game
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
