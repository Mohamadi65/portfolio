import { caveat } from "@/app/_utils/fonts";

export default function SpanVariable({ textColor = "text-gray-300", text  }) {
  return (
    <span
      className={`${textColor} ${caveat.variable} text-[1.4rem] font-caveat`}
    >
      {text}
    </span>
  );
}
