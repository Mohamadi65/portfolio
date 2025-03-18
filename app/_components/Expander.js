"use client";

import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export default function Expander({ titre, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }
  return (
    <div
      onClick={() => handleClick()}
      className="bg-slate-800 cursor-pointer rounded-md p-2 transition-all duration-300 mb-3 "
    >
      <div
        className={`flex justify-between  ${
          isOpen ? " border-slate-500 py-3" : ""
        } `}
      >
        <span>{titre}</span>
        <span className="">
          {" "}
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}{" "}
        </span>
      </div>
      {isOpen ? <hr className="w-[100%] ml-auto" /> : ""}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-fit opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
