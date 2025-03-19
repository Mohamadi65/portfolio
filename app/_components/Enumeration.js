import { BsCheckSquareFill } from "react-icons/bs";

export default function Enumeration({ icon = "✅", titre, explication }) {
  return (
    <p className="flex gap-2 lg:items-center">
    <span>
                <BsCheckSquareFill className="text-[#aec1c172]  max-lg:mt-1  " />
              </span>
      <span className="text-[1rem] font-normal text-gray-200">{titre}</span>
      <span>-</span>
      <span className="text-[1rem] text-gray-200">{explication} </span>
    </p>
  );
}
