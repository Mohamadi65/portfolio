import Link from "next/link";


export default function Button({bgColor,textColor="white",link, children}) {
  return (
    <button className={` ${bgColor}  ${textColor}  font-normal py-1  px-2 rounded-[12px] transition-all duration-200 hover:scale-125`}>
          <Link href={link}>{children} </Link>
        </button>
  )
}
