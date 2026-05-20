export default function Badge({ name }: { name: string}) {
    return (
        <div className="rounded-full text-white p-1 text-xs">
      <p>{name}</p>
    </div>
  );
}