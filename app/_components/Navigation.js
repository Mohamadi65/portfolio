"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose, MdComputer, MdMenu } from "react-icons/md";

const navLinks = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Définir la requête média pour le point de rupture `md` (768px)
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    // Fonction pour mettre à jour l'état
    const handleMediaChange = (event) => {
      if (event.matches) {
        setIsOpen(false); // Fermer le menu lorsque l'écran atteint `md`
      }
    };

    // Ajouter l'écouteur d'événements
    mediaQuery.addEventListener("change", handleMediaChange);

    // Vérifier immédiatement au montage du composant
    handleMediaChange(mediaQuery);

    // Nettoyer l'écouteur d'événements lors du démontage
    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []); // Le tableau vide signifie que cet effet ne s'exécute qu'au montage et au démontage
  function handleClick() {
    setIsOpen((open) => !open);
  }

  // Vérifier si le lien est actif
  function isActive(link) {
    if (pathname === "/") {
      return link.href === "/" ? "bg-[#3c93b9] text-gray-100 rounded-md px-1" : "";
    }
    return pathname.startsWith(link.href) && link.href !== "/"
      ? "bg-[#3c93b9] text-gray-100 rounded-md px-1"
      : "";
  }

  
  return (
    <div
      className={`navbar fixed z-10 top-0 right-0 left-0 ${
        isOpen
          ? "fixed bg-[#020c1f]  overflow-hidden  grid grid-cols-2 grid-rows-[1.5rem_1fr] transition-colors  duration-1000 top-0 left-0 bottom-0 h-screen w-full z-10 items-start  "
          : "bg-[#020c1f]  grid grid-cols-2  justify-between items-center p-2 duration-900 ease-in-out text-white border-b border-[#a8bbdd57]"
      }   `}
    >
      <div
        className={`logo font-bold text-[#46b3e2] cursor-pointer text-[2rem] ${
          isOpen ? "ml-[5%] mt-2" : ""
        } `}
      >
        <MdComputer />
        {/* <span className=" material-symbols-outlined computer"> devices </span> */}
      </div>
      <div
        onClick={handleClick}
        className={`icon justify-self-end  text-[2rem] cursor-pointer  md:hidden ${
          isOpen ? "mr-[5%] mt-2" : ""
        }`}
      >
        {isOpen ? <MdClose /> : <MdMenu />}
      </div>
      <div
        className={`    nav md:justify-self-end ${
          isOpen
            ? " col-span-full mt-8 max-md:block  border-t border-[#a8bbdd57] "
            : "max-md:hidden"
        } `}
      >
        <ul
          className={`links flex  list-none cursor-pointer max-md:flex-col  ${
            isOpen ? "  pr-[3%] pl-[3%]" : "gap-4"
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`${
                pathname === link.href ? "" : ""
              }  link transition-colors font-semibold text-[1.1rem] text-gray-300  md:text-[1.2rem] duration-200 hover:text-[#46b3e2] ${
                isOpen ? "border-b border-[#a8bbdd57]  p-[0.5rem_0]" : ""
              } `}
            >
              <Link className={isActive(link)}
                href={link.href}
                {...(isOpen ? { onClick: handleClick } : {})}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
