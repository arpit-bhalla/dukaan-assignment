import { useState } from "react";
import { PaginationBadge } from "./PaginationBadge";

export const Pagination = ({
  onChange = (page: number) => {},
  totalPages = 21,
}) => {
  const [currPage, setCurrPage] = useState(2);

  const getPages = () => {
    if (currPage < 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [currPage - 1, currPage, currPage + 1, "...", totalPages];
  };

  function changePage(pageNumber: number) {
    setCurrPage(pageNumber);
    onChange?.(pageNumber);
  }

  return (
    <div className="flex justify-between text-primary mt-6">
      <div
        className={"cursor-pointer " + (currPage === 1 ? "invisible" : "")}
        onClick={() => (currPage > 1 ? changePage(currPage - 1) : undefined)}
      >
        &lsaquo; Prev
      </div>

      <div
        className="flex gap-1"
        onClick={(ev) => {
          const span = ev.target as HTMLSpanElement;
          const pageNumber = Number(span.dataset.page);
          if (isNaN(pageNumber)) return;
          changePage(pageNumber);
        }}
      >
        {getPages().map((pageNumber) => (
          <PaginationBadge
            value={pageNumber}
            key={pageNumber}
            disabled={pageNumber === "..."}
            selected={pageNumber === currPage}
            data-page={pageNumber}
          />
        ))}
      </div>
      <div
        className={
          "cursor-pointer " + (currPage === totalPages ? "invisible" : "")
        }
        onClick={() =>
          currPage < totalPages ? changePage(currPage + 1) : undefined
        }
      >
        Next &rsaquo;
      </div>
    </div>
  );
};
