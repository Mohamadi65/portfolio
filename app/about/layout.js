import React, { Suspense } from "react";
import SideNavigation from "../_components/SideNavigation";
import Spinner from "../_components/Spinner";

export default function RootLayout({ children }) {
  return (
    <div className="md:grid md:grid-cols-[16rem_1fr] overflow-hidden grid-row-[2rem_1fr] md:min-h-screen mb-10  gap-10">
      <div className="md:border-r border-[#3c93b933]  md:h-full max-md:overflow-x-scroll mb-12 p-4">
        <SideNavigation />
      </div>
      {/* <div className='bg-red-300' >Navigation</div> */}
      <Suspense fallback={<Spinner />}>
        <div className=" md:h-full w-full md:py-3 ">{children}</div>
      </Suspense>
    </div>
  );
}
