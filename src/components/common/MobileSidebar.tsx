'use client'
import { useThemeStore } from "@/context/styleContext";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function MobileSidebar() {
    const sideBar = useThemeStore(state => state.sideBar);
    const toggleSideBar = useThemeStore(state => state.toggleSideBar);

    return (
        <div className="absolute z-10 w-full">
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${sideBar ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => toggleSideBar()}
            ></div>
            <div
                className={`fixed h-full w-80 rounded-r-xl border-r-2 flex flex-col top-0 left-0 pt-20 pb-6 border-black dark:border-white justify-start items-start bg-gray-100 dark:bg-[#292929] shadow-md transition-all duration-300 ease-in-out ${sideBar ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <nav className="p-4 flex flex-col gap-6 w-full overflow-y-auto">


                    <div className="w-full">
                        <Link onClick={() => toggleSideBar()}
                            href="/orcr" className="text-xl font-semibold text-black dark:text-white mb-3">
                            Orcr
                        </Link>

                        {/* ORCR Subsections - Always visible */}
                        <div className="pl-4">
                            <Link
                                onClick={() => toggleSideBar()}
                                href="/orcr/jossa"
                                className="block w-full text-lg py-2 px-3 mb-2 text-black dark:text-white border-l-2 border-black dark:border-white hover:bg-purple-300 dark:hover:bg-purple-900 rounded-r-md transition-colors"
                            >
                                JoSAA
                            </Link>
                            <Link
                                onClick={() => toggleSideBar()}
                                href="/orcr/csab"
                                className="block w-full text-lg py-2 px-3 mb-2 text-black dark:text-white border-l-2 border-black dark:border-white hover:bg-purple-300 dark:hover:bg-purple-900 rounded-r-md transition-colors"
                            >
                                CSAB
                            </Link>
                            <Link
                                onClick={() => toggleSideBar()}
                                href="/orcr/bitsat"
                                className="block w-full text-lg py-2 px-3 mb-2 text-black dark:text-white border-l-2 border-black dark:border-white hover:bg-purple-300 dark:hover:bg-purple-900 rounded-r-md transition-colors"
                            >
                                BITSAT
                            </Link>
                            <Link
                                onClick={() => toggleSideBar()}
                                href="/orcr/jac"
                                className="block w-full text-lg py-2 px-3 mb-2 text-black dark:text-white border-l-2 border-black dark:border-white hover:bg-purple-300 dark:hover:bg-purple-900 rounded-r-md transition-colors opacity-50"
                            >
                                JAC Delhi (Coming Soon)
                            </Link>
                        </div>
                    </div>

                    <div className="w-full mt-2 flex flex-col gap-2">
                        <Link onClick={() => toggleSideBar()}
                            href="/explore" className="text-xl font-semibold text-black dark:text-white mb-3">
                            Explore Colleges
                        </Link>

                    </div>
                    <div className="w-full mt-2 flex flex-col gap-2">
                        <Link onClick={() => toggleSideBar()}
                            href="/#survey" className="text-xl font-semibold text-red-800 dark:text-red-300 underline mb-3">
                            Help us improve
                        </Link>

                    </div>

                </nav>

                {/* Footer section */}
                <div className="mt-auto px-4 text-xs text-gray-600 dark:text-gray-400">
                    <p>© 2025 Crux</p>
                </div>
            </div>
        </div>
    );
}

export const SidebarButton = () => {
    const toggleSideBar = useThemeStore(state => state.toggleSideBar);
    return (
        <button
            onClick={() => toggleSideBar()}
            className="rounded-xl lg:hidden text-black border-2 border-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 shadow-black bg-purple-500 p-2"
            aria-label="Open navigation menu"
        >
            <Menu className="w-5 h-5" />
        </button>
    );
}
