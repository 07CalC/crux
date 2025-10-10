import Link from "next/link";
import Image from "next/image";
import { SidebarButton } from "./MobileSidebar";
import { ThemeToggleButton } from "./ToggleThemeButton";

export const Navbar = () => {
  return (
    <nav className="flex transition-colors ease-in-out items-center fixed top-0 z-50 shadow-sm shadow-black  dark:shadow-white w-full h-20 border-b-2 border-black dark:border-gray-100 justify-between lg:px-20 p-4 bg-purple-500  text-white">
      <SidebarButton />
      <div className="flex items-center">
        <Link
          href="/"
          className="text-4xl md:text-6xl flex font-bold items-center justify-center text-black glitchy-text font-sans"
        >
          CR
          <Image
            src="/logo.png"
            alt="logo"
            width={512}
            height={512}
            className="md:w-16 md:h-16 h-10 w-10"
          />
          X
        </Link>
      </div>
      <div className="lg:flex items-center hidden gap-x-8">
        <Link
          href="/orcr"
          className="mr-4 text-3xl font-bold text-black  hover:text-gray-300"
        >
          Orcr
        </Link>
        <Link
          href="/explore"
          className="mr-4 text-3xl font-bold text-black  hover:text-gray-300"
        >
          Explore
        </Link>
        <Link
          href="/#survey"
          className="mr-4 underline text-3xl font-bold text-red-700 hover:text-gray-300"
        >
          Help!
        </Link>


      </div>
      <div className="flex items-center">
        <ThemeToggleButton />
      </div>
    </nav>
  );
};
