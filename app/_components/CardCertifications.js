import Image from "next/image";
import js from "@/public/expert_javascript.jpg";
import res from "@/public/responsive.jpg";
import { HiDownload } from "react-icons/hi";

export default function CardCertifications({ data }) {
  return (
    <div className=" w-[15rem]  h-[15rem] transition-all duration-300 md:hover:scale-125 overflow-hidden  rounded-lg">
      <Image
        src={data.type === "js" ? js : res}
        alt="Certification JavaScript de Mohamadi Zongo"
        // layout="fill" // Permet à l'image de prendre toute la place disponible
        // objectFit="cover" // Ajuste l'image pour couvrir toute la div sans déformation
        quality={100}
        className=" z-2"
      />
      <a
        download
        href={data.fichier}
        className=" z-10 rounded-b-lg text-center items-center flex justify-center text-gray-300 overflow-hidden   bg-slate-800 w-full font-bold h-[2rem]  bottom-0"
      >
        <button className="flex items-center text-gray-400 gap-2">
          <span>
            <HiDownload />
          </span>
           <span >download</span> 
        </button>
      </a>
    </div>
  );
}
