import { SlidersHorizontal } from "lucide-react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";



type props = {
    view: { [key: string]: boolean },
    setView: React.Dispatch<{ [key: string]: boolean }>
}

export const ViewToggle = ({ view, setView }: props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <div className="rounded-xl w-full max-w-screen h-full flex-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl sm:text-lg self-start gap-x-2 items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2"
      >
        <SlidersHorizontal size={20} /> <p className="hidden sm:flex">View</p>
      </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute right-0 sm:right-4 z-10 mt-4">
          <div className="flex flex-col gap-4 p-4 w-full bg-gray-400 dark:bg-gray-700 border-black border-2 dark:border-white rounded-lg">
            {Object.entries(view).map(([key, value]) => (
              <div key={key} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 h-6 w-6 bg-purple-500 accent-purple-500"
                  checked={value}
                  onChange={() => setView({ ...view, [key]: !value })}
                />
                <label className="text-black dark:text-white">{key}</label>
              </div>    
            ))}
          </div>
        </motion.div>
        
      )}
      </AnimatePresence>
    </div>
    
    );
}