"use client";

import { createContext, useContext, useState } from "react";

// CREATION DU CONTEXT
export const FullscreenContext = createContext();

// PROVIDER QUI ENTOURE L'APPLICATION 
export function FullscreenProvider({children}) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleFullscreen() {
    setIsOpen((open)=>!open);
  }
    return (
      <FullscreenContext.Provider value={{isOpen, setIsOpen, toggleFullscreen}}  >
        {children}
      </FullscreenContext.Provider>
    )

}

// HOOK PERSONALISE POUR L'UTILISER FACILEMENT
export  function useFullscreen() {
  return (useContext(FullscreenContext));
}