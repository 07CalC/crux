import Link from "next/link";
import { IoStatsChart } from "react-icons/io5";

export const CutoffSection = () => {
  const cutoffRows = [
    { program: "IT", gender: "Neutral", open: 950, close: 5870 },
    { program: "IT", gender: "Female", open: 2818, close: 11259 },
    { program: "IT-BI", gender: "Neutral", open: 3281, close: 6192 },
    { program: "IT-BI", gender: "Female", open: 8616, close: 11529 },
    { program: "ECE", gender: "Neutral", open: 5249, close: 9200 },
    { program: "ECE", gender: "Female", open: 10761, close: 14522 },
  ];
  const cutoffCommon = {
    id: "c19b3fc1-f70c-48c5-997f-51dfcb3b4c79",
    institute: "IIITA",
  };

  return (

    <section className="mx-2 md:mx-4 rounded-2xl py-16 px-4 sm:px-8 bg-white dark:bg-zinc-900 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] border border-gray-200 dark:border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 order-2 md:order-1">
            <div className="overflow-x-auto border-2  border-black px-4 dark:border-white shadow-purple-500  rounded-lg max-w-[100vw] -mx-4 sm:mx-0 bg-gray-300 dark:bg-[#222222]">
              <table className="min-w-full border-collapse text-left font-thin">
                <thead>
                  <tr className="min-w-max">
                    <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                      <span>Institute</span>
                    </th>
                    <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                      <span>Program</span>
                    </th>
                    <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                      <span>Gender</span>
                    </th>
                    <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                      <span>Open</span>
                    </th>
                    <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                      <span>Close</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="min-w-max">
                  {cutoffRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white cursor-pointer hover:text-white"
                    >
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-normal dark:border-white px-2 md:px-4 py-2">
                        <Link href={`/${cutoffCommon.id}`}>
                          {cutoffCommon.institute}
                        </Link>
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-normal dark:border-white px-2 md:px-4 py-2">
                        {row.program}
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-normal dark:border-white px-2 md:px-4 py-2">
                        {row.gender}
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-normal dark:border-white px-2 md:px-4 py-2">
                        {row.open}
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-normal dark:border-white px-2 md:px-4 py-2">
                        {row.close}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex-1 order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Previous Year Cutoffs
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Access detailed historical data on opening and closing ranks for
              various programs across colleges in JoSAA and CSAB counseling
              rounds.
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                JoSAA Cutoffs
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                CSAB Trends
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                BITSAT
              </span>
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                JAC Delhi (Coming Soon)
              </span>
            </div>
            <Link
              href="/orcr"
              className="mt-8 rounded-xl inline-flex items-center text-lg text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 dark:shadow-white shadow-black bg-purple-300 dark:bg-purple-700 p-3"
            >
              Explore All Cutoffs <IoStatsChart className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )

}
