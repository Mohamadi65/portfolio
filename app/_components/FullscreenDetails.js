"use client";

import { useState } from "react";

export default function FullscreenDetails() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      {isOpen && (
        <div className="bg-green-900 z-[1000] min-h-screen fixed inset-0 w-screen px-5 py-2  ">
          <div className="bg-red-900  flex items-center justify-between">

          <span>FullscreenDetails</span>

          <button onClick={handleClick} className="bg-white text-black px-2 py-1 h-auto rounded">
            Close X
          </button>
          </div>
        </div>
      )}
    </>
  );
}
