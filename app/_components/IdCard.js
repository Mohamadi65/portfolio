import React from "react";
import Photo from "./Photo";
import photo from "@/public/my_photo_transparent.png";
import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";
import { Caveat } from "next/font/google";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Ajoute les poids nécessaires
  variable: "--font-caveat", // Crée une variable CSS pour l'utiliser facilement
});
const montserrat_Alternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Ajoute les poids nécessaires
  variable: "--font-montserrat_Alternates", // Crée une variable CSS pour l'utiliser facilement
});

// hover:animate-pulse
// from-purple-800 via-indigo-800 to-blue-800
export default function IdCard() {
  return (
    <div className="transition-all  container rotateIdCard cursor-pointer  my-5   hover:-rotate-0 rotate-z-45 duration-300 hover:shadow-2xl  shadow-[0_0_100px_50px_rgba(255,255,255,0.1)] transform hover:translate-y-2 bg-gradient-to-r from-slate-900 via-indigo-800 to-blue-800 w-[25rem] h-[10rem] rounded-lg  mx-auto flex gap-5 p-5 ">
      <div className=" w-[6.25rem] h-[6.25rem]  overflow-hidden rounded-full border  border-[#789dbc5d]">
        <Image
          src={photo}
          alt="Mohamadi Zongo"
          quality={100}
          className=" "
          width="100%"
          height="100%"
        />
      </div>
      <div className={` text-gray-200  text-[1.4rem] flex flex-col gap-2`}>
        <span
          className={`text-gray-100 ${caveat.variable} font-caveat tracking-[0.2rem]`}
        >
          Mohamadi Zongo
        </span>
        <div className="flex flex-col gap-2">
          <p className="  text-[0.8rem] flex gap-2 items-center ">
            <MdEmail className="text-purple-500" />
            <span className="">mohamadi.zongo115@gmail.com</span>
          </p>
          <p className="text-[0.8rem] flex gap-2 items-center">
            <FaMapMarkerAlt className="text-purple-500" />
            <span className="">11000 carcassonne, France</span>
          </p>
        </div>
      </div>
    </div>
  );
}
