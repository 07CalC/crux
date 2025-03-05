import { Orcr } from "@/types/globalTypes";
// import { useState } from "react";



export const Table = ({ orcr }: { orcr: Orcr[] }) => {
  // const [headers, setHeaders] = useState([
  //   {"Institute": "institute"},
  //   {"Academic Program": "academicProgramName"},
  //   {"Gender": "gender"},
  //   {"Quota": "quota"},
  //   {"Seat Type": "seatType"},
  //   {"Open Rank": "openRank"},
  //   {"Close Rank": "closeRank"},
  // ]);
  const headers = [
    {"Institute": "institute"},
    {"Academic Program": "academicProgramName"},
     {"Gender": "gender"},
     {"Quota": "quota"},
     {"Seat Type": "seatType"},
     {"Open Rank": "openRank"},
     {"Close Rank": "closeRank"},
  ]

  return (
    <div className="overflow-x-auto border-2  border-black px-4 dark:border-white shadow-purple-500  rounded-lg max-w-[100vw] -mx-4 sm:mx-0 bg-gray-300 dark:bg-[#171616]">
      <table className="min-w-full border-collapse text-left font-thin">
        <thead>
          <tr className="min-w-max">
            {headers.map((header, index) => (
              <th key={index} className="text-lg text-center sm:text-2xl text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-4 py-2">
                <span>{Object.keys(header)[0]}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="min-w-max">
          {orcr.map((item: Orcr, index: number) => (
            
            <tr onClick={() => window.open(`/college/${item.id}`)} key={index} className="hover:bg-gray-900 hover:dark:bg-gray-100 text-black dark:text-white hover:dark:text-gray-900 cursor-pointer hover:text-white">
              {/* <Link href={'/college/' + item.id} > */}
              {headers.map((header, index) => (
                <td key={index} className="text-md sm:text-xl text-center border-t border-black font-thin dark:border-white px-4 py-2">
                  {item[Object.values(header)[0] as keyof Orcr].toString()}
                </td>
              ))}
              
              {/* </Link> */}
            </tr>
            
          ))}
        </tbody>

      </table>
    </div>
  )
}