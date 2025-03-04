import Image from "next/image";
import React from "react";
import photo from "@/public/my_photo_transparent.png"

export default function Photo() {
  return (
    <div className="image mt-2 flex justify-center w-[100%]">
      <div className="photo max-w-[150px] max-h-[150px] pt-[25px] rounded-[50%] object-fit flex justify-center items-center border  border-slate-800 overflow-hidden ">
        <Image src={photo} quality={100} alt="ma photo" />
      </div>
    </div>
  );
}
