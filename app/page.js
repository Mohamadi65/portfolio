"use client";

import Accroche from "@/app/_components/Accroche";
import Photo from "./_components/Photo";
import ScrollIcons from "./_components/ScrollIcons";
import Link from "next/link";
import Button from "./_components/Button";
import { Suspense } from "react";
import Spinner from "./_components/Spinner";
import Cta from "./_components/Cta";

const metadata = {
  title: "Portfolio de Mohamadi Zongo",
  description: "Il s'agit du portofolio de Mohamadi Zongo",
};

export default function page() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Photo />
      </Suspense>
      <Accroche />
      {/* <p className="bg-slate-900 w-[80%] mx-auto border-radius flex text-center mt-5 rounded-md p-2 font-extralight">
        bienvenue dans mon univers digital. Développeur web autodidacte, je me
        forme en continu pour repousser les limites du web.
      </p> */}

      {/* <p className="bg-slate-900 w-[80%] md:text-[1.4rem] mx-auto text-center mt-5 rounded-md p-4 font-light text-gray-200 leading-relaxed ">
        <span className="text-[#81BFDA] font-semibold">Bienvenue</span> dans mon
        univers digital. Développeur web{" "}
        <span className="text-green-400 font-bold">autodidacte</span>, je me
        forme en continu pour{" "}
        <span className="">repousser les limites du web</span>. Ce site a été
        développé avec{" "}
        <span className="text-[#81BFDA] font-semibold">Next.js</span> et <span className="text-[#81BFDA] font-semibold">Tailwind css</span> et est 100% <span className="text-[#81BFDA] font-semibold">responsive</span> 
      </p> */}

      <Cta/>

      <ScrollIcons />

      <p className=" mt-[8rem] md:text-[1.4rem] md:gap-6  flex gap-5 justify-center items-center max-w-[70%] mx-auto">
        <Button
          bgColor="bg-slate-700"
          textColor="text-[#81BFDA]"
          link="/projets"
        >
          {" "}
          My projects
        </Button>
        <Button bgColor="bg-green-900" link="/about">
          {" "}
          Learn more
        </Button>
      </p>
    </div>
  );
}
