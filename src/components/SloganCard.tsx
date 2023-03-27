import { useEffect, useState } from "react";

export const SloganCard = ({ title = "", index = 0 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    }
  }, [visible]);

  return (
    <div
      onClick={() => {
        navigator.clipboard.writeText(title);
        setVisible(true);
      }}
      style={{ backgroundColor: "#F2F2F2" }}
      className="px-4 py-2 cursor-pointer text-slate-900 h-16 flex items-center group relative"
    >
      <span className="">{title}</span>
      <span
        className={`${
          visible ? "" : "group-hover:opacity-100"
        } transition-opacity bg-gray-800 text-sm text-gray-100 rounded px-2 py-1 absolute ${
          !(index % 2) ? "-left-32" : "-right-32"
        } -top-6 translate-y-full opacity-0 m-4 mx-auto`}
      >
        Click to copy
      </span>
      <span
        className={`transition-opacity bg-gray-800 text-sm text-gray-100 rounded px-2 py-1 absolute ${
          !(index % 2) ? "-left-20" : "-right-20"
        } -top-6 translate-y-full ${
          visible ? "opacity-100" : "opacity-0"
        } m-4 mx-auto`}
      >
        Copied
      </span>
    </div>
  );
};
