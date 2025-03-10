import React, { Suspense } from "react";
import SideNavigation from "../_components/SideNavigation";
import Spinner from "../_components/Spinner";
import { Caveat } from "next/font/google";
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Ajoute les poids nécessaires
  variable: "--font-caveat", // Crée une variable CSS pour l'utiliser facilement
});

export default function RootLayout({ children }) {
  return (
    <div className="md:grid md:grid-cols-[16rem_1fr]  overflow-hidden grid-row-[2rem_1fr] md:min-h-screen mb-10  gap-10">
      <div className="md:border-r md:mt-15 border-[#3c93b933]  md:h-full max-md:overflow-x-scroll mb-12 p-4">
        <SideNavigation />
      </div>
      {/* <div className='bg-red-300' >Navigation</div> */}
      <Suspense fallback={<Spinner  />} >
        <div className=" md:h-full w-full md:py-3  ">{children}</div>
      </Suspense>
    </div>
  );
}
