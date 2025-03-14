export default function Span({ textColor = "text-gray-300", text, textSize="text-[1rem]" }) {
  return <span className={`${textColor} ${textSize} max-2xl:text-[0.9rem]  `}>{text}</span>;
}
