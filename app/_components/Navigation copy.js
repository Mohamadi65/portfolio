"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdClose, MdComputer, MdMenu } from "react-icons/md";


const navLinks = [
  {
    name: "Acceuil",
    href:'/'
  },
  {
    name: "About",
    href:'/about'
  },
  {
    name: "Contact",
    href:'/contact'
  },
]

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
  return (
    <div
      className={`navbar ${
        isOpen
          ? "absolute bg-[#020c1f]  grid grid-cols-2 grid-rows-[1.5rem_1fr] transition-colors  duration-1000 top-0 left-0 h-screen w-full items-start  "
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
{navLinks.map((link)=>(
   <li key={link.name}
   className={`${pathname === link.href ? "text-[#46b3e2]" : "" }  link transition-colors duration-500 hover:text-[#46b3e2] ${
     isOpen ? "border-b border-[#a8bbdd57]  p-[0.5rem_0]" : ""
   } `}
 >
   <Link
     href={link.href}
     {...(isOpen ? { onClick: handleClick } : {})}
     
   >
     {link.name}
   </Link>
 </li>
))}

          {/* <li
            className={`${pathname === "/" ? "text-[#46b3e2]" : "" }  link transition-colors duration-500 hover:text-[#46b3e2] ${
              isOpen ? "border-b border-[#a8bbdd57]  p-[0.5rem_0]" : ""
            } `}
          >
            <Link
              href="/"
              {...(isOpen ? { onClick: handleClick } : {})}
              className=""
            >
              Accueil
            </Link>
          </li> */}
          {/* <li
            className={` ${pathname === "/about" ? "text-[#46b3e2]" : "" } link transition-colors duration-500 hover:text-[#46b3e2] ${
              isOpen ? "border-b border-[#bcccdc31]  p-[0.5rem_0]" : ""
            } `}
          >
            <Link href="/about" {...(isOpen ? { onClick: handleClick } : {})}>
              About
            </Link>
          </li>
          <li
            className={` ${pathname === "/contact" ? "text-[#46b3e2]" : "" } link transition-colors duration-500 hover:text-[#46b3e2] ${
              isOpen ? "border-b border-[#bcccdc31] p-[0.5rem_0]" : ""
            } `}
          >
            <Link href="/contact" {...(isOpen ? { onClick: handleClick } : {})}>
              Contact
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
