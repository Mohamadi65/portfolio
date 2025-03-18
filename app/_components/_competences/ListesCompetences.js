import React from "react";
import { BsCheckSquareFill } from "react-icons/bs";

export default function ListesCompetences({ data }) {
  
  return (
    <div>
      {/* {data.map((dat, i) => (
        <div key={i} className="mt-2">
          {
            dat.map((contenu, i) => (
              <div
                key={i}
                className="flex gap-2 text-[0.9rem]  lg:items-center "
              >
                <span>
                  <BsCheckSquareFill className="text-[#aec1c172]  max-lg:mt-1  " />
                </span>
                <span className={`text-[#C5D3E8] flex   `}>{contenu}</span>
              </div>
            ))}
        </div>
      ))} */}

      {data?.map((contenu, i) => (
        <div key={i} className="flex gap-2 text-[0.9rem]  lg:items-center ">
          <span>
            <BsCheckSquareFill className="text-[#aec1c172]  max-lg:mt-1  " />
          </span>
          <span className={`text-[#C5D3E8] flex   `}>{contenu}</span>
        </div>
      ))}
    </div>
  );
}
