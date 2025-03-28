import { DiReact } from "react-icons/di";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { GoCheckCircleFill } from "react-icons/go";
import Storytelling from "../_components/Storytelling";
import LangageTech from "../_components/LangageTech";
import Titre from "../_components/Titre";
// import Link from "next/Link";
import Enumeration from "@/app/_components/Enumeration";
import Link from "next/link";
import IdCard from "../_components/IdCard";
import { useFullscreen } from "../_context/FullscreenContext";
export const metadata = {
  title: "À propos de Mohamadi Zongo 🚀",
  description:
    "Découvrez mon parcours, mes compétences et ma passion pour le développement web",
};

export default function page() {
  return (
    <div className="md:min-w-[40%]   md:max-w-[100%] md:p-3 p-2 md:rounded-md mx-auto mt-4 shadow-2xl bg-slate-900 flex flex-col about-opacity ">
      <span className="font-bold text-[1.3rem] mb-3   text-center bg-slate-800   ">
        About me 🚀
      </span>
      <IdCard />
      <Titre titre="From curious to passionate developer" />

      <Storytelling>
        I&rsquo;ve always been fascinated by digital technology and how it
        shapes our daily lives. But it was when I discovered web development
        that I found my true passion. My path didn&rsquo;t follow a traditional
        path. Self-taught, I began teaching myself to code, exploring HTML, CSS,
        and JavaScript through tutorials, personal projects, and online
        challenges. Every line of code I wrote was a new learning opportunity, a
        step closer to expertise.
      </Storytelling>
      <Titre titre="Continuous learning 📚" />
      <Storytelling>
        Although I have academic training in computer science, it was by
        thinking outside the box that I learned the most. I completed my journey
        with web development certifications and online training, specializing in
        modern technologies such as{" "}
        <span className="font-normal text-slate-200 text-[1rem]">
          React js, Next js, Laravel
        </span>
        ... . Today, I continue to train myself daily to push the limits of the
        web and create modern, efficient digital experiences that are accessible
        to all.
      </Storytelling>
      <Titre titre="My strengths 🏆" />
      <Enumeration
        titre="Creativity"
        explication="Transforming ideas into elegant and functional interfaces"
      />
      <Enumeration
        titre="Autonomy"
        explication="Ability to learn quickly and solve problems effectively"
      />
      <Enumeration
        titre="Rigor"
        explication="Clean, structured and performance-optimized code"
      />

      <p className="text-[1rem] mt-2">
        {" "}
        I&rsquo;m always looking for new challenges and enriching collaborations. If you&rsquo;d like to know more, don&rsquo;t hesitate to contact me.{" "}
        <Link href="/about/contact" className="text-[#3c93b9] font-bold">
        to contact me!{" "}
        </Link>{" "}
      </p>
    </div>
  );
}
