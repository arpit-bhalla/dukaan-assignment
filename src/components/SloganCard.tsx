export const SloganCard = ({ title = "", index = 0 }) => {
  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(title);
      }}
      style={{ backgroundColor: "#F2F2F2" }}
      className="px-4 py-2 cursor-pointer text-slate-900 h-16 flex items-center group relative"
    >
      <span className="">{title}</span>
      <span
        className={`group-hover:opacity-100 transition-opacity bg-gray-800 text-sm text-gray-100 rounded px-2 py-1 absolute ${
          !(index % 2) ? "-left-32" : "-right-32"
        } -top-6 translate-y-full opacity-0 m-4 mx-auto`}
      >
        Click to copy
      </span>
    </div>
  );
};
