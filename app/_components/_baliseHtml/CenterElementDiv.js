

export default function CenterElementDiv({children, textSize = "1rem"}) {
  return (
    <div className={`flex gap-2  items-baseline lg:items-center   ${textSize} `}>{children} </div>
  )
}
