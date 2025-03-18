import { BsCheckSquareFill } from "react-icons/bs";

export default function ListesTechnologiesContent({ dataTech }) {
 
  const data = Object.entries(dataTech).map(([keyframes, values]) => ({
    titre: keyframes,
    contenu: values,
  }));

  
  return (
    <div className="">
    {data.map((dat, i) => (
      <div key={i} className="mt-2">
        <p className="capitalize">{dat.titre}</p>
        {dat?.contenu &&
          dat.contenu.map((contenu, index) => (
            <div key={index} className="flex gap-2 text-[0.9rem]  lg:items-center">
              <BsCheckSquareFill className="text-[#aec1c172] max-lg:mt-1" />
              <span className="text-[#C5D3E8] flex">{contenu}</span>
            </div>
          ))}
      </div>
    ))}
  </div>
  );
}

