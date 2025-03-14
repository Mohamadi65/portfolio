"use client";
import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import SpanVariable from "./SpanVariable";
import Span from "./Span";
import CenterElementDiv from "./_baliseHtml/CenterElementDiv";
import burkina from "@/public/burkina-icon.png";
import france from "@/public/france-icon.png";
import Image from "next/image";

export default function TextExpander({ texte }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !isOpen);
  }
  return (
    <div className="flex gap-2">
      <p className="">
        {isOpen ? texte : texte.split(" ").slice(0, 3).join(" ")}
      </p>
      <button
        className={` bg-slate-700 px-1 rounded-md ${
          isOpen ? "text-green-400" : "text-blue-300"
        }`}
        onClick={() => handleClick()}
      >
        {isOpen ? "afficher moins" : "... afficher plus"}
      </button>
    </div>
  );
}

export function ContentExpander({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <div
      onClick={() => handleClick()}
      className="bg-slate-800 cursor-pointer rounded-md p-2 transition-all duration-300 mb-3 "
    >
      <div className="flex items-start justify-between gap-3">
        <div className="grid grid-cols-[3fr_1fr_1fr] gap-3 flex-1 max-2xl:grid-cols-[2fr_1fr] max-lg:grid-cols-[1fr] max-md:grid-cols-[1fr_1fr]  ">
          <div className="max-2xl:col-span-full max-md:col-span-full  ">
            <CenterElementDiv>
              <SpanVariable textColor="text-gray-400" text="Poste" />
              <span>:</span>
              <Span text={data.poste} textColor="white" />
            </CenterElementDiv>
          </div>
          <div className="">
            <CenterElementDiv>
              <SpanVariable text="Pays" textColor="text-gray-400" />
              <span>:</span>
              <Span text={data.pays} textColor="white" />
              {data.pays === "France" ? (
                <Image
                width={25}
                  src={france}
                  alt="drapeau du Burkina Faso"
                  quality={100}
                  className="ml-auto max-2xl:ml-0 max-sm:hidden"
                />
              ) : (
                <Image
                width={25}
                  src={burkina}
                  alt="drapeau de France"
                  quality={100}
                  className="ml-auto max-2xl:ml-0 max-sm:hidden"
                />
              )}
            </CenterElementDiv>
          </div>
          <div className="justify-self-center  max-2xl:justify-self-auto">
            <CenterElementDiv>
              <SpanVariable textColor="text-gray-400" text="Année" />
              <span>:</span>
              <Span text={data.annee} textColor="white" />
            </CenterElementDiv>
          </div>
          <div className="max-md:col-span-full">
            <CenterElementDiv>
              <SpanVariable textColor="text-gray-400" text="Entreprise" />
              <span>:</span>
              <Span text={data.entreprise} textColor="text-blue-300" />
            </CenterElementDiv>
          </div>
          <div className="">
            <CenterElementDiv>
              <SpanVariable textColor="text-gray-400" text="Ville" />
              <span>:</span>
              <Span text={data.ville} textColor="text-white" />
            </CenterElementDiv>
          </div>
          <div className="justify-self-center max-2xl:justify-self-auto">
            <CenterElementDiv>
              <SpanVariable textColor="text-gray-400" text="Nombre de Mois" />
              <span>:</span>
              <Span text={data.nbrMois} textColor="text-white" />
            </CenterElementDiv>
          </div>
        </div>
        <span className="">
          {" "}
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}{" "}
        </span>
      </div>
      {/* {isOpen ? <div>Je veux devenir riche</div> : "" } */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-fit opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white">Je veux devenir riche</p>
      </div>
    </div>
  );
}
