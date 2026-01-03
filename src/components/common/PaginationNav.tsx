import React from "react";
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

type props = {
  currPage: number;
  totalPages: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  colsShown: number;
  setColsShown: React.Dispatch<React.SetStateAction<number>>;
};

export const PaginationNav = ({
  currPage,
  setCurrPage,
  totalPages,
  setColsShown,
  colsShown,
}: props) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
      {/* Rows per page */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Rows per page
        </span>
        <select
          className="input py-2 px-3 cursor-pointer min-w-[80px]"
          value={colsShown}
          onChange={(e) => setColsShown(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {/* Page info and controls */}
      <div className="flex items-center gap-2">
        {/* Page info */}
        <span className="text-sm text-muted-foreground mr-2">
          Page <span className="font-semibold text-foreground">{currPage}</span> of{" "}
          <span className="font-semibold text-foreground">{totalPages}</span>
        </span>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrPage(1)}
            disabled={currPage === 1}
            className="btn-ghost p-2 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="First page"
          >
            <FiChevronsLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            disabled={currPage === 1}
            onClick={() => setCurrPage(prev => prev - 1)}
            className="btn-ghost p-2 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Previous page"
          >
            <FiChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <div className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg min-w-[60px] text-center">
            {currPage}
          </div>

          <button
            disabled={currPage === totalPages}
            onClick={() => setCurrPage(prev => prev + 1)}
            className="btn-ghost p-2 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Next page"
          >
            <FiChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>

          <button
            disabled={currPage === totalPages}
            onClick={() => setCurrPage(totalPages)}
            className="btn-ghost p-2 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Last page"
          >
            <FiChevronsRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
