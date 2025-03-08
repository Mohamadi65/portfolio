import { caveat } from "@/app/_utils/fonts";
import { FaGraduationCap } from "react-icons/fa6";
import Image from "next/image";

const parcours = [
  {
    titre: "🎓 Licence en Ingénierie des Systèmes d'Information",
    universite: "École Supérieure d'Informatique (ESI)",
    lienUniversite:
      "https://www.esi-upb.bf/ingenierie-des-systemes-dinformation",
    pays: "Burkina Faso",
    drapeau: {
      src: "https://flagcdn.com/w40/bf.png",
      alt: "Drapeau du Burkina Faso",
    },
    ville: "Bobo Dioulasso",
    annee: 2021,
    competences: [
      {
        nom: "Conception et développement des systèmes d'information",
        commentaire: "",
      },
      {
        nom: "Programmation orientée objet",
        commentaire: "Java, Python",
      },
      {
        nom: "Programmation procédurale",
        commentaire: "C",
      },
      {
        nom: "Bases de données",
        commentaire: "SQL, MySQL",
      },
      {
        nom: "administration des bases de données",
        commentaire: "",
      },
      {
        nom: "Développement web",
        commentaire: "HTML, CSS, JavaScript",
      },
      {
        nom: "Administration des systèmes et réseaux",
        commentaire: "Linux, Sécurité informatique",
      },
      {
        nom: "Gestion de projet informatique",
        commentaire: "",
      },
      {
        nom: "Bureautique",
        commentaire: "Word, Excel, PowerPoint",
      },
    ],
    matieres: [
      "Algorithmique et structures de données",
      "Programmation web et mobile",
      "Modélisation des bases de données",
      "Sécurité informatique",
      "Développement d'applications client/serveur",
      "Conception et gestion de projets informatiques",
    ],
  },
  {
    titre: "🎓 BUT Science des données",
    universite: "Université de perpignan Via Domitia",
    lienUniversite:
      "https://formations.univ-perp.fr/diplome/but/but-science-des-donnees#competences",
    pays: "France",
    drapeau: {
      src: "https://flagcdn.com/w40/fr.png",
      alt: "Drapeau de la France",
    },
    ville: "Carcassonne",
    annee: 2023,
    competences: [
      {
        nom: "Traitement et gestion des données",
        commentaire:
          "Insertion, modification, extraction et suppression des données",
      },
      {
        nom: "Analyse statistique",
        commentaire:
          "Mise en évidence des tendances et informations clés adaptées aux besoins décisionnels",
      },
      {
        nom: "Valorisation des résultats",
        commentaire:
          "Interprétation et contextualisation des données pour une restitution professionnelle",
      },
      {
        nom: "Développement d’outils décisionnels",
        commentaire:
          "Création de solutions de visualisation et structuration des données adaptées",
      },
    ],
    matieres: [
      "Bases de données relationnelles",
      "Programmation (bases, statistique, automatisée)",
      "Statistique (descriptive, inférentielle, tests d'hypothèses)",
      "Mathématiques (analyse, algèbre, probabilités)",
      "Datavisualisation et reporting",
      "Systèmes d'information décisionnels",
      "Traitement de données SIG",
      "Méthodes factorielles et classification automatique",
      "Communication et valorisation des données",
      "Anglais professionnel et scientifique",
    ],
  },
];

export default function page() {
  return (
    <div className="text-gray-200   ">
      <div className="text-center">
        <span
          className={`text-[1.8rem] text-center font-bold text-gray-400 ${caveat.variable} font-caveat tracking-[0.2rem]`}
        >
          Parcours Scolaires
        </span>
      </div>

      <div className="bg-slate-900 max-w-[100%] mx-auto px-2 rounded-[5px]">
        {parcours.map((parcour) => (
          <div key={parcour.titre} className="py-5">
            <p className="text-center font-semibold text-gray-300 tracking-[0.1rem] mb-5">
              {parcour.titre}{" "}
              <span
                className={`${caveat.variable} font-caveat text-purple-400`}
              >
                ({parcour.annee})
              </span>{" "}
            </p>
            {/* contenu */}
            <div className="grid grid-cols-[1fr]   lg:grid-cols-[2fr_1fr]  xl:grid-cols-[2fr_1fr_1fr]   ">
              <p className="flex gap-2 items-center ">
                <span
                  className={`text-gray-300 ${caveat.variable} text-[1.4rem] font-caveat`}
                >
                  Université :
                </span>
                <span className="text-gray-300">{parcour.universite}</span>{" "}
              </p>
              <p className=" flex gap-2 items-center">
                {" "}
                <span>
                  {" "}
                  <span
                    className={`text-gray-300 ${caveat.variable} text-[1.4rem] font-caveat`}
                  >
                    Pays :
                  </span>
                  <span className="ml-2 text-gray-300">{parcour.pays}</span>{" "}
                </span>{" "}
                <img
                  src={parcour.drapeau.src}
                  width="20rem"
                  alt={parcour.drapeau.alt}
                />{" "}
              </p>
              <p className=" flex gap-2 items-center">
                <span
                  className={`text-gray-300 ${caveat.variable} text-[1.4rem] font-caveat`}
                >
                  Ville
                </span>
                : <span className="text-gray-300">{parcour.ville}</span>{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
