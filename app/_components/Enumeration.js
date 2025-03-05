export default function Enumeration({ icon = "✅", titre, explication }) {
  return (
    <p className="flex gap-2 lg:items-center">
      <span className={`text-green-600`}>{icon} </span>
      <span className="text-[0.9rem] font-normal text-gray-200">{titre}</span>
      <span>-</span>
      <span className="text-[0.8rem] text-gray-200">{explication} </span>
    </p>
  );
}
