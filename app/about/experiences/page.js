import { DetailsExperiences } from "@/app/_components/_experiences/DetailsExperiences";
// import FullscreenDetails from "@/app/_components/FullscreenDetails";
// import TextExpander, { ContentExpander } from "@/app/_components/TextExpander";
import { experiences } from "@/app/_data/Experiences";

export const metadata = {
  title: "les Expériences de Mohamadi Zongo",
  description:
    "Cette page relate les expériences intéressantes de Monsieur Zongo Mohamadi",
};

export default function page() {
  return (
    <div>
      {/* <TextExpander texte="Je suis développeur web et analyste de donnée" /> */}
      {experiences.map((data, i) => (
        <DetailsExperiences key={i} data={data} />
      ))}
    </div>
  );
}
