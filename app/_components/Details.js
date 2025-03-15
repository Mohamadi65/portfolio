import React from "react";

export default function Details({ children }) {
  return (
    <div className="fixed inset-0 z-[1001] min-h-screen w-screen">
    {/* Arrière-plan flou */}
    <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm"></div>
  
    {/* Contenu net */}
    <div className="relative z-[1002] px-5 py-2">
      {children}
    </div>
  </div>
  );
}
