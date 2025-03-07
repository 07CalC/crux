import Link from "next/link";
import { ThemeToggleButton } from "./ToggleThemeButton";
import { MdOutlineMenu } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="flex  transition-colors ease-in-out items-center fixed top-0 z-50 shadow-sm shadow-black  dark:shadow-white w-full h-20 border-b-2 border-black dark:border-gray-100 justify-between sm:px-28 p-4 bg-purple-500  text-white">
      <button className="rounded-xl sm:hidden text-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 border-2 border-black shadow-black bg-purple-500 p-2">
        <MdOutlineMenu className="text-black dark:text-white text-2xl" />
      </button>
      <div className="flex items-center">
        <p className="text-5xl font-bold text-black glitchy-text font-sans">
          crux
        </p>
      </div>
      <div className="sm:flex items-center hidden gap-x-8">
        <Link
          href="/orcr"
          className="mr-4 text-2xl text-black  hover:text-gray-300"
        >
          Orcr
        </Link>
        <Link
          href="/nirf"
          className="mr-4 text-2xl text-black  hover:text-gray-300"
        >
          Nirf
        </Link>
        <Link
          href="/explore"
          className="mr-4 text-2xl text-black  hover:text-gray-300"
        >
          Explore
        </Link>
      </div>
      <div className="flex items-center">
        <ThemeToggleButton />
      </div>
    </nav>
  );
};
