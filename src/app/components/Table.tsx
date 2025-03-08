import { Orcr } from "@/types/globalTypes";

export const Table = ({
  orcr,
  view,
}: {
  orcr: Orcr[];
  view: { name: string; key: keyof Orcr; show: boolean }[];
}) => {
  return (
    <div className="overflow-x-auto border-2  border-black px-4 dark:border-white shadow-purple-500  rounded-lg max-w-[100vw] -mx-4 sm:mx-0 bg-gray-300 dark:bg-[#222222]">
      <table className="min-w-full border-collapse text-left font-thin">
        <thead>
          <tr className="min-w-max">
            {view.map(
              (header, index) =>
                header.show && (
                  <th
                    key={index}
                    className="text-lg text-center sm:text-2xl text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-4 py-2"
                  >
                    <span>{header.name}</span>
                  </th>
                )
            )}
          </tr>
        </thead>
        <tbody className="min-w-max">
          {orcr.map((item: Orcr, index: number) => (
            <tr
              onClick={() => window.open(`/college/${item.id}`)}
              key={index}
              className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white  cursor-pointer hover:text-white"
            >
              {/* <Link href={'/college/' + item.id} > */}
              {view.map(
                (header, index) =>
                  header.show && (
                    <td
                      key={index}
                      className="text-md sm:text-xl text-center border-t border-black font-thin dark:border-white px-4 py-2"
                    >
                      {item[header.key].toString()}
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
