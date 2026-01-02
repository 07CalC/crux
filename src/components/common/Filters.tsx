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
  minRank: number;
  maxRank: number;
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

  const formatLabel = (key: string) => {
    const labelMap: Record<string, string> = {
      institute: "Institute",
      academicProgramName: "Academic Program",
      quota: "Quota",
      seatType: "Seat Type",
      gender: "Gender",
    };
    return labelMap[key] || key;
  };

  return (
    <div className="rounded-xl w-full max-w-screen flex-1" ref={filterRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl sm:text-lg items-center gap-x-2 justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2"
      >
        <Filter size={20} />{" "}
        <p className="hidden sm:flex items-center gap-1">
          Filters {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
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
            <div className="p-6 w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#2a2a2a] dark:to-[#1f1f1f] border-black border-2 dark:border-white rounded-xl shadow-[8px_8px_0px_0px] dark:shadow-white shadow-black">
              <div className="mb-6">
                <p className="text-sm font-bold text-black dark:text-white uppercase tracking-wide mb-4">Rank Range</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-black dark:text-white">
                      Minimum Rank
                    </label>
                    <input
                      className="p-3 active:ring-0 ring-0 w-full border-2 text-base font-medium border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100 transition-all hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-white hover:shadow-black"
                      type="number"
                      name="minRank"
                      value={filters.minRank || ""}
                      onChange={handleChange}
                      placeholder="e.g., 1"
                      min="0"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-black dark:text-white">
                      Maximum Rank
                    </label>
                    <input
                      className="p-3 active:ring-0 ring-0 w-full border-2 text-base font-medium border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100 transition-all hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-white hover:shadow-black"
                      type="number"
                      name="maxRank"
                      value={filters.maxRank || ""}
                      onChange={handleChange}
                      placeholder="e.g., 10000"
                      min="0"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t-2 border-black dark:border-white pt-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filterOptions.map((filter, index) => {
                    const key = Object.keys(filter)[0] as
                      | "institute"
                      | "academicProgramName"
                      | "quota"
                      | "seatType"
                      | "gender";
                    return (
                      <div key={index} className="flex flex-col gap-2">
                        <label className="text-sm font-bold text-black dark:text-white uppercase tracking-wide">
                          {formatLabel(key)}
                        </label>
                        <select
                          name={key}
                          value={filters[key] || ""}
                          onChange={handleChange}
                          className="p-3 active:ring-0 ring-0 w-full border-2 text-base font-medium border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100 transition-all hover:shadow-[4px_4px_0px_0px] dark:hover:shadow-white hover:shadow-black cursor-pointer"
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
                </div>
              </div>

              <div className="flex justify-end mt-6 pt-4 border-t-2 border-black dark:border-white">
                <button
                  className="rounded-xl px-6 py-3 font-bold text-base text-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] hover:shadow-[8px_8px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 border-2 border-black shadow-black dark:shadow-white bg-purple-500 hover:bg-purple-600"
                  onClick={() =>
                    setFilters({
                      searchKeyword: "",
                      institute: "",
                      academicProgramName: "",
                      quota: "",
                      seatType: "",
                      gender: "",
                      minRank: 0,
                      maxRank: 0,
                    })
                  }
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
