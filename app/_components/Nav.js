"use client";
import { useState, useEffect } from "react";
import { MdClose, MdDevices, MdMenu } from "react-icons/md";
import Link from "next/link";

const links = [
  { name: "Accueil", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="bg-[#020c1f]  text-white fixed  top-0 w-full p-4 border-b border-[#042460d2] transition-all">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold flex items-center">
          <MdDevices className="text-[#46b3e2] text-2xl" />
        </span>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Liste des liens unique pour desktop & mobile */}
      <ul
        className={`flex flex-col md:flex-row gap-4 mt-5 md:mt-0 md:flex ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path} onClick={() => setMenuOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
