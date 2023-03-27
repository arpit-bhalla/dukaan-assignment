export const SloganCard = ({ title = "" }) => {
  return (
    <div
      style={{ backgroundColor: "#F2F2F2" }}
      className="px-4 py-2 cursor-pointer text-slate-900 h-16 flex items-center"
    >
      {title}
    </div>
  );
};
