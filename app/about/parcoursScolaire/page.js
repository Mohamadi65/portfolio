import { caveat } from "@/app/_utils/fonts";
import { FaGraduationCap } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";
import { BsCheckSquareFill } from "react-icons/bs";

const parcours = [
  {
    titre: "🎓 Licence en Ingénierie des Systèmes d'Information",
    universite: "École Supérieure d'Informatique",
    lienUniversite:
      "https://www.esi-upb.bf/ingenierie-des-systemes-dinformation",
    pays: "Burkina Faso",
    drapeau: {
      src: "https://flagcdn.com/w40/bf.png",
      alt: "Drapeau du Burkina Faso",
    },
    domaine: "Système d'information",
    abbr: "ESI",
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
      "https://formations.univ-perp.fr/diplome/but/but-science-des-donnees",
    pays: "France",
    drapeau: {
      src: "https://flagcdn.com/w40/fr.png",
      alt: "Drapeau de la France",
    },
    domaine: "Science des données",
    abbr: "SD",
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

      <div className="bg-slate-900 max-w-[100%]  mx-auto px-2 rounded-[5px]">
        {parcours.map((parcour) => (
          <div key={parcour.titre} className="py-5">
            <p className="text-center font-semibold text-gray-300 tracking-[0.1rem] bg-slate-800 mb-5">
              {parcour.titre}{" "}
              <span
                className={`${caveat.variable} font-caveat text-purple-400`}
              >
                ({parcour.annee})
              </span>{" "}
            </p>
            {/* contenu */}
            <div className="grid grid-cols-[1fr]   lg:grid-cols-[1.3fr_1fr]  xl:grid-cols-[2fr_1fr_1fr]   ">
              <p className="flex gap-2 items-center ">
                <SpanVariable text="Université" /> :
                <Span text={parcour.universite} />
              </p>
              <p className=" flex gap-2 items-center">
                {" "}
                <span>
                  {" "}
                  <SpanVariable text="Pays" /> : <Span text={parcour.pays} />{" "}
                </span>{" "}
                <img
                  src={parcour.drapeau.src}
                  width="20rem"
                  alt={parcour.drapeau.alt}
                />{" "}
              </p>
              <p className=" flex gap-2 items-center">
                <SpanVariable text="Ville" />
                :
                <Span text={parcour.ville} />
              </p>
              <p className=" flex gap-2 items-center">
                <SpanVariable text="Domaine" />:{" "}
                <Link href={parcour.lienUniversite} className="">
                  {parcour.domaine}
                </Link>{" "}
              </p>
              <Link
                href={parcour.lienUniversite}
                className=" flex gap-2 items-center text-blue-300 border-b w-fit border-blue-300"
              >
                <SpanVariable textColor="text-blue-300" text="Site officiel" />
                {/* <span
                  className={` ${caveat.variable} text-[1.4rem] font-caveat`}
                >
                  Site officiel
                </span> */}
                <IoIosLink />:{" "}
                <Span textColor="text-blue-300" text={parcour.abbr} />
              </Link>
            </div>
            {/* COMPETENCES ACQUISES et MATIERES CLES */}
            <div className=" mt-4 ">
              <div className={` grid grid-cols-[1fr] `}>
                {/* COMPETENCES ACQUISES */}
                <div>
                  <span className="text-white font-light rounded-sm px-1 bg-slate-800   cursor-pointer shadow-[0_0_10px_00px_rgba(255,255,255,0.5)]">
                    Compétences acquises
                  </span>
                  <div className="flex flex-col mt-5 ">
                    <Competences parcour={parcour}/>
                  </div>
                </div>
                {/* FIN COMPETENCES ACQUISES */}

                {/* DEBUT MATIERES CLES */}
                <div className=" mt-5">
                  <span className="text-white font-light rounded-sm px-1 bg-slate-800 shadow-[0_0_10px_00px_rgba(255,255,255,0.5)] ">
                    Matières clés
                  </span>
                  {/* Contenu matière clés */}
                  <div className="flex flex-col mt-5 ">
                    {/* {parcour.matieres.map((matiere,i)=> {
                      <span key={i} className="text-white">{i}</span>
                    } )} */}

                    <Matieres parcour={parcour} />
                  </div>
                  {/* Fin contenu matière clés */}
                </div>
                {/* FIN MATIERES CLES */}
              </div>
            </div>
            {/* FIN COMPETENCES */}
          </div>
        ))}
      </div>
    </div>
  );
}

function Span({ textColor = "text-gray-300", text }) {
  return <span className={textColor}>{text}</span>;
}

function SpanVariable({ textColor = "text-gray-300", text }) {
  return (
    <span
      className={`${textColor} ${caveat.variable} text-[1.4rem] font-caveat`}
    >
      {text}
    </span>
  );
}

function Matieres({ parcour }) {
  return (
    <div className="">
      {parcour.matieres.map((matiere, i) => (
        <div
          key={i}
          className=" flex gap-2 max-xl:gap-0 text-[0.9rem] max-xl:flex-col xl:flex-row   mb-1"
        >
          <div className=" flex gap-2 ">
            <BsCheckSquareFill className="text-[#aec1c17d] text-[1rem] " />
            <span className={`text-[#e9eced] flex  `}> {matiere}</span>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

function Competences({parcour}) {
  return ( <div>

  
    {parcour.competences.map((competence, i) => (
      <div
        key={i}
        className=" flex gap-2 max-xl:gap-0 text-[0.9rem] max-xl:flex-col xl:flex-row   mb-1"
      >
        <div className=" flex gap-2 xl:items-center">
          <BsCheckSquareFill className="text-[#aec1c17d] text-[1rem] " />
          <span className={`text-[#e9eced] flex  `}>
            {" "}
            {competence.nom} {competence.commentaire ? ":" : ""}
          </span>{" "}
        </div>
        <span className={`max-xl:ml-6 text-[#909596]`}>
          {competence.commentaire
            ? `${competence.commentaire}`
            : ""}
        </span>{" "}
      </div>
    ))}
    </div>
  )
}
