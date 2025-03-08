import { Caveat } from "next/font/google";

export const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Ajoute les poids nécessaires
  variable: "--font-caveat", // Crée une variable CSS pour l'utiliser facilement
});
