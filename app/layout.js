import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["latin"], display: "swap",  weight: ["100", "300", "400","500", "700", "900"] });

import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
export const metadata = {
  title: "Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-md:text-[110%]">
      <body className={`bg-[#020c1f] text-white h-full ${roboto.className} font-normal `}>
        <div className="">
          <header className="">
            <Navigation />
          </header>
          <main className="mt-5 w-[90%] m-[0_auto] font-light">{children}</main>
        </div>
      </body>
    </html>
  );
}
