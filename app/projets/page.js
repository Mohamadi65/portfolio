import Image from "next/image";
import { projets } from "../_data/Projets";
import { FaExternalLinkAlt, FaGithub, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import Cta from "../_components/Cta";

export const metadata = {
  title: "Les projets de Mohamadi Zongo",
  description: "Découvrez mes projets et ma passion pour le développement web",
};

export default function page() {
  return (
    <>
    <Cta/>
      {/* <p className="bg-slate-900 w-[80%] md:text-[1.5rem] mx-auto text-center mt-5 rounded-md p-4 font-light text-gray-200 leading-relaxed ">
       <span className="text-[#81BFDA] font-semibold"> Ce site </span> a été
        développé avec
        <span className="text-green-400 font-bold ml-1">Next.js</span> et{" "}
        <span className="text-green-400 font-bold ml-1">Tailwind css</span> et est 100% <span className="text-[#81BFDA] font-semibold">responsive</span>

      </p> */}
      <div className="grid relative gap-5 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] mt-8 ">
        {projets.map((projet, i) => (
          <div
            href={projet.lienSite}
            key={i}
            className="bg-slate-700  max-sm:justify-self-center w-[15rem] shadow-2xl p-4 rounded-md cursor-pointer transition-all duration-300 hover:scale-110 "
          >
            <Image
              src={projet.photo}
              alt={projet.nom}
              width={300}
              height={300}
              className=""
              objectFit="cover"
            />
            <p className="text-white font-bold mt-2">{projet.nom}</p>
            <div className="bg-slate-500 rounded-md p-2 mb-auto flex justify-between">
              <Link href={projet.lienGithub}>
                <FaGithub className="" />
              </Link>
              <Link href={projet.lienSite}>
                <FaExternalLinkAlt />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
