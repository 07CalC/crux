import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";

type filters = {
  searchKeyword: string;
  institute: string;
  academicProgramName: string;
  gender: string;
  quota: string;
  seatType: string;
  rank: number;
};
type props = {
  filters: filters;
  filterOptions: [
    { institute: string[] },
    { academicProgramName: string[] },
    { quota: string[] },
    { seatType: string[] },
    { gender: string[] }
  ];
  setFilters: React.Dispatch<React.SetStateAction<filters>>;
};

export default function Filters({ filters, setFilters, filterOptions }: props) {
  const [isOpen, setIsOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="rounded-xl w-full max-w-screen flex-1" ref={filterRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl sm:text-lg items-center gap-x-2 justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2"
      >
        <Filter size={20} />{" "}
        <p className="hidden sm:flex">
          Filters {isOpen ? <ChevronUp /> : <ChevronDown />}
        </p>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 right-0 sm:right-4 sm:left-4 z-10 mt-6"
          >
            <div className="grid sm:grid-cols-2 gap-4 p-4 w-full bg-gray-400 dark:bg-[#323232] border-black border-2 dark:border-white rounded-lg">
              {filterOptions.map((filter, index) => {
                const key = Object.keys(filter)[0] as
                  | "institute"
                  | "academicProgramName"
                  | "quota"
                  | "seatType"
                  | "gender";
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <label className="text-black dark:text-white">{key}</label>
                    <select
                      name={key}
                      value={filters[key] || ""}
                      onChange={handleChange}
                      className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold  border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100"
                    >
                      <option value="">All</option>
                      {(filter as Record<typeof key, string[]>)[key].map(
                        (option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                );
              })}
              <div className="flex flex-col gap-2">
                <label className="text-black dark:text-white">Rank</label>
                <input
                  className="p-2 active:ring-0 ring-0 w-full border-2 text-lg font-semibold border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100"
                  type="number"
                  name="rank"
                  value={filters.rank}
                  onChange={handleChange}
                  placeholder="Rank"
                />
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end items-end">
                <button
                  className="rounded-xl text-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 border-2 border-black shadow-black dark:shadow-white bg-purple-500 p-2"
                  onClick={() =>
                    setFilters({
                      searchKeyword: "",
                      institute: "",
                      academicProgramName: "",
                      quota: "",
                      seatType: "",
                      gender: "",
                      rank: 0,
                    })
                  }
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
