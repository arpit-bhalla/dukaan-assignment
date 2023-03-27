export function FeatureCard({
  img,
  title,
  summary,
}: {
  img: number;
  title: string;
  summary: string;
}) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <img src={`./images/feat-${img}.png`} className="w-14 mb-9" />
      <div className="text-xl">{title}</div>
      <div className="text-slate-500">{summary}</div>
    </div>
  );
}
