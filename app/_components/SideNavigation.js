"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BsFillHandThumbsUpFill,
  BsFillLayersFill,
  BsFillMortarboardFill,
  BsFire,
  BsHandThumbsUpFill,
  BsPersonCheckFill,
} from "react-icons/bs";

const navLinks = [
  {
    name: "À propos de moi",
    href: "/about",
    icon: <BsPersonCheckFill />,
  },
  {
    name: "Compétences",
    href: "/about/competences",
    icon: <BsFire />,
  },
  {
    name: "Parcours scolaires",
    href: "/about/parcoursScolaire",
    icon: <BsFillMortarboardFill />,
  },
  {
    name: "Expériences",
    href: "/about/experiences",
    icon: <BsFillLayersFill />,
  },
  // {
  //   name: "Contact",
  //   href: "/about/contact",
  //   icon: <BsFillLayersFill />,
  // },
  {
    name: "Loisirs",
    href: "/about/loisirs",
    icon: <BsHandThumbsUpFill />,
  },
];

export default function SideNavigation() {
  const pathname = usePathname();
  return (
    <div className={`md:fixed   flex flex-col justify-between h-[80%]`}>
      <ul className="flex md:flex-col gap-4  text-nowrap ">
        {navLinks.map((link) => (
          <li key={link.name} className="">
            
            <Link
              href={link.href}
              className={` font-semibold text-[#bfcddc] flex items-center gap-2 ${
                pathname === link.href ? "bg-[#3c93b981]  rounded-md px-1" : ""
              } `}
            >
              <span>{link.icon} </span>
               <span>{link.name}</span> 
            </Link>
          </li>
        ))}
      </ul>

      {/* { pathname === '/about/parcoursScolaire' && <p className="max-md:hidden mb-[20%]" >Je suis be</p> } */}
    </div>
  );
}
