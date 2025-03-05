import { DiReact } from "react-icons/di";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GoCheckCircleFill } from "react-icons/go";
import Storytelling from "../_components/Storytelling";
import LangageTech from "../_components/LangageTech";
import Titre from "../_components/Titre";
import Link from "next/Link";
import Enumeration from "@/app/_components/Enumeration"
export const metadata = {
  title: "À propos de moi 🚀",
  description:
    "Découvrez mon parcours, mes compétences et ma passion pour le développement web.",
};

export default function page() {
  return (
    <div className="md:min-w-[40%] md:max-w-[70%] md:p-3 p-2 md:rounded-md mx-auto mt-4 shadow-2xl bg-slate-900 flex flex-col about-opacity ">
      <span className="font-bold text-[1.3rem] mb-3   text-center bg-[#3c93b9]   ">
        À propos de moi 🚀
      </span>
      <Titre titre="Du curieux au développeur passionné" />
      <Storytelling>
        Depuis toujours, j’ai été fasciné par le digital et la manière dont la
        technologie façonne notre quotidien. Mais c’est en découvrant le
        développement web que j’ai trouvé ma véritable passion. Mon parcours n’a
        pas suivi un chemin classique. Autodidacte, j’ai commencé à apprendre à
        coder par moi-même, explorant HTML, CSS et JavaScript à travers des
        tutoriels, des projets personnels et des défis en ligne. Chaque ligne de
        code écrite était une nouvelle opportunité d’apprentissage, un pas de
        plus vers l’expertise.
      </Storytelling>
      <Titre titre="Un apprentissage en continu 📚" />
      <Storytelling>
        Bien que j’aie suivi des formations académiques en informatique, c’est
        en sortant des sentiers battus que j’ai le plus appris. J’ai complété
        mon parcours avec des certifications en développement web et des
        formations en ligne, me spécialisant dans des technologies modernes
        comme{" "}
        <LangageTech className="text-blue-300" text="React">
          {" "}
          <DiReact />
        </LangageTech>{" "}
        <LangageTech className="text-green-500" text="Next.js">
          {" "}
          <RiNextjsLine />
        </LangageTech>{" "}
        et Node.js. Aujourd’hui, je continue à me former au quotidien pour
        repousser les limites du web et créer des expériences numériques
        modernes, performantes et accessibles à tous.
      </Storytelling>
      <Titre titre="Mes points forts 🏆" />
      <Enumeration titre="Créativité" explication="Transformer des idées en interfaces élégantes et fonctionnelles" />
      <Enumeration titre="Autonomie" explication="Capacité à apprendre rapidement et à résoudre des problèmes de manière efficace" />
      <Enumeration titre="Rigueur" explication="Code propre, structuré et optimisé pour la performance"  />

      <p className="text-[0.8rem] mt-2"> Je suis toujours à la recherche de nouveaux défis et de collaborations enrichissantes. Si tu veux en savoir plus, n’hésite pas <Link href="/contact" className="text-[#3c93b9] font-bold" >à me contacter ! </Link> </p>

    </div>
  );
}
