export default function CardScheduleDestination({
  title,
  price,
  active,
}: {
  title: string;
  price: string;
  active?: boolean;
}) {
  return (
    <div
      className={`px-6 py-3 border-r border-gray-300 relative ${
        active ? "bg-blue-50" : "bg-white"
      }`}
    >
      <p className="text-gray-500">{title}</p>

      <p className="font-semibold">{price}</p>

      {active && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
      )}
    </div>
  );
}