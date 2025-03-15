"use client";

import Image from "next/image";
import CenterElementDiv from "../_baliseHtml/CenterElementDiv";
import Span from "../Span";
import SpanVariable from "../SpanVariable";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import france from "@/public/france-icon.png";
import burkina from "@/public/burkina-icon.png";

import Details from "../Details";
import { useState } from "react";

export function DetailsExperiences({ data }) {
  // console.log(data);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
  }

  return (
    <>
      <div
        onClick={() => handleClick()}
        className={`bg-slate-800  cursor-pointer rounded-md p-2 transition-all duration-300 mb-3 `}
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
            <button className="bg-blue-800 rounded-md px-2">Détails</button>
          </span>
        </div>
      </div>
      {isOpen && (
        <Details>
          <ShowData data={data} setIsOpen={setIsOpen} />
        </Details>
      )}
    </>
  );
}

function ShowData({ data, setIsOpen }) {
  return (
    <div className="bg-red-900 max-w-[80%] z-[1002] mx-auto">
      <p>{data.poste}</p>
      <div>{data.pays}</div>
      <button onClick={() => setIsOpen((open) => !open)}>X</button>
    </div>
  );
}
