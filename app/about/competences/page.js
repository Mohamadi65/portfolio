import ListesCompetences from "@/app/_components/_competences/ListesCompetences";
import { DetailsExperiences } from "@/app/_components/_experiences/DetailsExperiences";
import ListesTitreContent from "@/app/_components/_experiences/ListesTitreContent";
import CardCertifications from "@/app/_components/CardCertifications";
import Expander from "@/app/_components/Expander";
import SpanVariable from "@/app/_components/SpanVariable";
import { certifications, competences } from "@/app/_data/competences";

import React from "react";

export default function page() {
  return (
    <div>
      <div className="text-center mb-6">
        <SpanVariable text={"Compétences Techniques et Fonctionnelles"} />
      </div>

      {competences.map((data, i) => (
        <Expander key={i} titre={data.titre}>
          <ListesCompetences data={data.contenu} />
        </Expander>
      ))}

      <div className="text-center mb-6">
        <SpanVariable text={"Certifications"} />
      </div>

      <div className=" flex justify-center">
        <div className=" mb-10 flex gap-10 ">
          {certifications.map((data, i) => (
            <CardCertifications key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
