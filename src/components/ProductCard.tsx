export function ProductCard({
  title,
  summary,
  index,
}: {
  title: string;
  summary: string;
  index: number;
}) {
  return (
    <div>
      <img src={`./images/prod-${index}.png`} />
      <div className="text-xl mt-4 mb-1">{title}</div>
      <div className="text-slate-500">{summary}</div>
    </div>
  );
}
