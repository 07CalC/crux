'use client'
import { Menu } from "lucide-react"; 
import { useThemeStore } from "@/context/styleContext";
import Link from "next/link";


export default function MobileSidebar() {
    const sideBar = useThemeStore(state => state.sideBar)
    const setSideBar = useThemeStore(state => state.toggleSideBar)
    console.log(sideBar)
  return (
    <div className="absolute z-10 w-full">
      
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          sideBar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSideBar()}
      ></div>
      <div
        className={`fixed w-1/3 rounded-xl border-r-2 flex flex-col top-0 left-0 pt-20 border-b-2 border-black dark:border-white justify-center items-start bg-gray-100 dark:bg-[#292929] shadow-md transition-transform duration-300 ${
          sideBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >

        <nav className="p-6 flex flex-col gap-4">
          <Link onClick={() => setSideBar()} href="/orcr" className="rounded-xl sm:hidden text-black border-2 border-black dark:text-white transition-all ease-in-out duration-100 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100  shadow-black dark:shadow-white bg-purple-500 p-2">Orcr</Link>
          <Link onClick={() => setSideBar()} href="/nirf" className="rounded-xl sm:hidden text-black border-2 border-black dark:text-white transition-all ease-in-out duration-100 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100  shadow-black dark:shadow-white bg-purple-500 p-2">Nirf</Link>
          <Link onClick={() => setSideBar()} href="/explore" className="rounded-xl sm:hidden text-black border-2 border-black dark:text-white transition-all ease-in-out duration-100 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100  shadow-black dark:shadow-white bg-purple-500 p-2">Explore</Link>
        </nav>
      </div>
    </div>
  );
}

export const SidebarButton = () => {
    const setSideBar = useThemeStore(state => state.toggleSideBar)
    return (
        <button onClick={() => setSideBar()} className="rounded-xl sm:hidden text-black border-2 border-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100  shadow-black bg-purple-500 p-2">
        <Menu className="text-2xl sm:text-3xl"/>
      </button>
    )
}