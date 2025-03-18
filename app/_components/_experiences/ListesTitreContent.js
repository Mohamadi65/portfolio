import { BsCheckSquareFill } from "react-icons/bs";
import { caveat } from "@/app/_utils/fonts";

export default function ListesTitreContent({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((dat, i) => (
        <div key={i} className="mt-2">
          <p>{dat?.titre}</p>
          { dat?.contenu && dat.contenu.map((contenu, i) => (
            <div key={i} className="flex gap-2 text-[0.9rem]  lg:items-center ">
              <span>
                <BsCheckSquareFill className="text-[#aec1c172]  max-lg:mt-1  " />
              </span>
              <span className={`text-[#C5D3E8] flex   `}>{contenu}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
