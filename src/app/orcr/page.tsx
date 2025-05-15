"use client";

import Link from "next/link";
import Image from "next/image";

const options = [
  {
    name: "Jossa",
    image: "/jossa.jpg",
    done: true,
    href: "/orcr/jossa",
  },
  {
    name: "CSAB",
    image: "/csab.jpg",
    done: true,
    href: "/orcr/csab",
  },
  {
    name: "Bitsat",
    image: "/bits.png",
    done: false,
    href: "/orcr/bitsat",
  },
  {
    name: "Jac",
    image: "/jac.jpeg",
    done: false,
    href: "/orcr/jac",
  },
];

export default function Orcr() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 py-10 md:p-8 md:py-20 gap-y-6 h-full">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[84rem]">
        {options.map((option) => (
              <Link key={option.name} href={option.href} className="block h-11/12">
                <div className="rounded-xl flex-col h-full sm:text-lg self-start items-center justify-center flex text-black border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] hover:shadow-[0px_0px_0px_0px] hover:translate-x-1 hover:translate-y-1 sm:hover:translate-x-2 sm:hover:translate-y-2 hover:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2">
                  <div className="relative w-full h-64 overflow-hidden rounded-t-md">
                    <Image
                      src={option.image}
                      alt={option.name}
                      fill
                      className="h-11/12  bg-white dark:bg-white"
                    />
                  </div>
                  <div className="p-6 flex justify-center items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">{option.name}</h2>
                    {option.done ? (
                      <span className="text-green-500 text-lg ml-2"></span>
                    ) : (
                      <span className="text-red-500 text-lg ml-2">Coming soon</span>
                    )}
                  </div>
                </div>
              </Link>
            
        ))}
      </div>
    </div>
  );
}