import Image from "next/image";
import js from "@/public/expert_javascript.jpg";
import res from "@/public/responsive.jpg";
import { HiDownload } from "react-icons/hi";

export default function CardCertifications({ data }) {
  return (
    <div className="   max-md:w-[10rem] hover:z-50   relative bg-red-800  max-md:h-[10rem] h-[13rem] transition-all duration-300 md:hover:scale-125 overflow-hidden  rounded-lg">
      <Image
        src={data.type === "js" ? js : res}
        alt="Certification JavaScript de Mohamadi Zongo"
        // layout="fill" // Permet à l'image de prendre toute la place disponible
        // objectFit="cover" // Ajuste l'image pour couvrir toute la div sans déformation
        quality={100}
        className="w-full h-full z-2 opacity-95 "
      />
      <a
        download
        href={data.fichier}
        className=" z-10 absolute rounded-b-lg text-center items-center flex justify-center text-gray-300 overflow-hidden   bg-slate-800 w-full font-bold h-[1.5em]  bottom-0"
      >
        <button className="flex items-center text-gray-400 text-[0.8rem] gap-2">
          <span>
            <HiDownload />
          </span>
          <span>Télecharger</span>
        </button>
      </a>
    </div>
  );
}
