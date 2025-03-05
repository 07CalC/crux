import { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import * as motion from 'motion/react-client'
import { AnimatePresence } from "motion/react";


type requiredFilters = {
  [key: string]: string | number;
}

export default function Filters({ onFilterChange }: { onFilterChange: (filters: requiredFilters) => void }) {
  const [filters, setFilters] = useState({
    institute: "",
    program: "",
    gender: "",
    quota: "",
    seatType: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="rounded-xl w-full max-w-screen flex-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl sm:text-lg items-center gap-x-2 justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2"
      >
        <Filter size={20} /> <p className="hidden sm:flex">Filters {isOpen ? <ChevronUp /> : <ChevronDown />}</p>
      </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute left-0 sm:left-4 z-10 mt-4">
          <div className="grid grid-cols-2 gap-4 p-4 w-full bg-gray-400 dark:bg-gray-700 border-black border-2 dark:border-white rounded-lg">
            <input
                type="text"
                name="institute"
                value={filters.institute}
                onChange={handleChange}
                placeholder="Institute"
                className="p-3 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
            />
            <input
                type="text"
                name="program"
                value={filters.program}
                onChange={handleChange}
                placeholder="Program"
                className="p-3 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
            />
            <input
                type="text"
                name="gender"
                value={filters.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="p-3 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
            />
            <input
                type="text"
                name="quota"
                value={filters.quota}
                onChange={handleChange}
                placeholder="Quota"
                className="p-3 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
            />
            <input
                type="text"
                name="seatType"
                value={filters.seatType}
                onChange={handleChange}
                placeholder="Seat Type"
                className="p-3 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
            />
          </div>
        </motion.div>
        
      )}
      </AnimatePresence>
    </div>
    
  );
}
