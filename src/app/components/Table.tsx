import { Orcr } from "@/types/globalTypes";

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

  return (
    <div className="overflow-x-auto border  border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
  dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
 px-4 dark:border-white  rounded-lg max-w-[100vw] -mx-4 sm:mx-0 bg-white dark:bg-[#1a1a1a]">
      <table className="min-w-full border-collapse text-left font-thin">
        <thead>
          <tr className="min-w-max">
            {view.map(
              (header, index) =>
                header.show && (
                  <th
                    key={index}
                    className="text-lg cursor-pointer text-start sm:text-2xl text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-4 py-2"
                    onClick={() => {
                      if (header.key === "marks") {
                        if (sort.type === "marks" && sort.marks === "asc") {
                          setSort({ marks: "desc", type: "marks" });
                        }
                        else if (sort.type === "marks" && sort.marks === "desc") {
                          setSort({ marks: "asc", type: "marks" });
                        } else {
                          setSort({ marks: "asc", type: "marks" });
                        }
                      }
                      else if (header.key === "openRank") {
                        if (sort.type === "rank" && sort.openRank === "asc") {
                          setSort({ openRank: "desc", closeRank: null, type: "rank" });
                        } else if (sort.type === "rank" && sort.openRank === "desc") {
                          setSort({ openRank: "asc", closeRank: null, type: "rank" });
                        } else {
                          setSort({ openRank: "asc", closeRank: null, type: "rank" });
                        }
                      } else if (header.key === "closeRank") {
                        if (sort.type === "rank" && sort.closeRank === "asc") {
                          setSort({ openRank: null, closeRank: "desc", type: "rank" });
                        } else if (sort.type === "rank" && sort.closeRank === "desc") {
                          setSort({ openRank: null, closeRank: "asc", type: "rank" });
                        } else {
                          setSort({ openRank: null, closeRank: "asc", type: "rank" });
                        }
                      }
                      else { }
                    }}
                  >
                    <span className="">{header.name}
                      {header.key === "marks" && sort.type === "marks" && (
                        <span className="text-5xl">
                          {sort.marks === "asc" ? "↑" : sort.marks === "desc" ? "↓" : ""}
                        </span>
                      )}
                      {(header.key === "openRank") && sort.type === "rank" && (
                        <span className="text-5xl">
                          {sort.openRank === "asc" ? "↑" : sort.openRank === "desc" ? "↓" : ""}
                        </span>
                      )}
                      {(header.key === "closeRank") && sort.type === "rank" && (
                        <span className="text-5xl">
                          {sort.closeRank === "asc" ? "↑" : sort.closeRank === "desc" ? "↓" : ""}
                        </span>
                      )}
                    </span>
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody className="min-w-max">
          {orcr.map((item: Orcr, index: number) => (
            <tr
              onClick={() => window.open(`/explore/${item.collegeId}`)}
              key={index}
              className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white  cursor-pointer hover:text-white"
            >
              {/* <Link href={'/explore/' + item.id} > */}
              {view.map(
                (header, index) =>
                  header.show && (
                    <td
                      key={index}
                      className="text-md sm:text-xl font-medium text-start border-t border-black dark:border-white px-4 py-2"
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
  );
};
