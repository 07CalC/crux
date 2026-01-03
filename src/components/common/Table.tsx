"use client";

import { Orcr } from "@/types/globalTypes";
import { useRouter } from "next/navigation";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";

export const Table = ({
  orcr,
  view,
  sort,
  setSort,
}: {
  orcr: Orcr[];
  view: { name: string; key: keyof Orcr; show: boolean }[];
  sort: {
    type: "rank";
    openRank: "asc" | "desc" | null;
    closeRank: "asc" | "desc" | null;
  } | { type: "marks"; marks: "asc" | "desc" | null };
  setSort: React.Dispatch<
    React.SetStateAction<{
      type: "rank";
      openRank: "asc" | "desc" | null;
      closeRank: "asc" | "desc" | null;
    } | { type: "marks"; marks: "asc" | "desc" | null }>>
}) => {
  const router = useRouter();

  const getSortIcon = (key: keyof Orcr) => {
    if (key === "marks" && sort.type === "marks") {
      if (sort.marks === "asc") return <FiArrowUp className="w-4 h-4" />;
      if (sort.marks === "desc") return <FiArrowDown className="w-4 h-4" />;
    }
    if (key === "openRank" && sort.type === "rank") {
      if (sort.openRank === "asc") return <FiArrowUp className="w-4 h-4" />;
      if (sort.openRank === "desc") return <FiArrowDown className="w-4 h-4" />;
    }
    if (key === "closeRank" && sort.type === "rank") {
      if (sort.closeRank === "asc") return <FiArrowUp className="w-4 h-4" />;
      if (sort.closeRank === "desc") return <FiArrowDown className="w-4 h-4" />;
    }
    return null;
  };

  const handleSort = (key: keyof Orcr) => {
    if (key === "marks") {
      if (sort.type === "marks" && sort.marks === "asc") {
        setSort({ marks: "desc", type: "marks" });
      } else if (sort.type === "marks" && sort.marks === "desc") {
        setSort({ marks: "asc", type: "marks" });
      } else {
        setSort({ marks: "asc", type: "marks" });
      }
    } else if (key === "openRank") {
      if (sort.type === "rank" && sort.openRank === "asc") {
        setSort({ openRank: "desc", closeRank: null, type: "rank" });
      } else if (sort.type === "rank" && sort.openRank === "desc") {
        setSort({ openRank: "asc", closeRank: null, type: "rank" });
      } else {
        setSort({ openRank: "asc", closeRank: null, type: "rank" });
      }
    } else if (key === "closeRank") {
      if (sort.type === "rank" && sort.closeRank === "asc") {
        setSort({ openRank: null, closeRank: "desc", type: "rank" });
      } else if (sort.type === "rank" && sort.closeRank === "desc") {
        setSort({ openRank: null, closeRank: "asc", type: "rank" });
      } else {
        setSort({ openRank: null, closeRank: "asc", type: "rank" });
      }
    }
  };

  return (
    <div className="card overflow-hidden p-0">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-muted/50">
            <tr>
              {view.map(
                (header, index) =>
                  header.show && (
                    <th
                      key={index}
                      className={`text-sm font-bold text-left px-4 py-3 border-b border-border ${
                        (header.key === "marks" || header.key === "openRank" || header.key === "closeRank")
                          ? "cursor-pointer hover:bg-muted/70 transition-colors group"
                          : ""
                      }`}
                      onClick={() => {
                        if (header.key === "marks" || header.key === "openRank" || header.key === "closeRank") {
                          handleSort(header.key);
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-primary">{header.name}</span>
                        {(header.key === "marks" || header.key === "openRank" || header.key === "closeRank") && (
                          <span className="text-muted-foreground group-hover:text-primary transition-colors">
                            {getSortIcon(header.key) || <FiArrowUp className="w-4 h-4 opacity-30" />}
                          </span>
                        )}
                      </div>
                    </th>
                  )
              )}
            </tr>
          </thead>
          <tbody>
            {orcr.map((item: Orcr, index: number) => (
              <tr
                key={index}
                className="group hover:bg-primary/5 transition-colors border-b border-border last:border-b-0 cursor-pointer"
                onClick={() => router.push(`/explore/${item.collegeId}`)}
              >
                {view.map(
                  (header, idx) =>
                    header.show && (
                      <td
                        key={idx}
                        className="text-sm font-medium px-4 py-3"
                      >
                        {(item[header.key] ?? "").toString()}
                      </td>
                    )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
