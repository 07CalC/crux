import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { title: "Orcr", link: "/orcr" },
  // { title: "Nirf", link: "/nirf" },
  { title: "Explore", link: "/explore" },
];

const officialLinks = [
  { title: "Nirf", link: "https://www.nirfindia.org/" },
  { title: "JOSSA", link: "https://josaa.nic.in/" },
  { title: "CSAB", link: "https://csab.nic.in/" },
  { title: "BITSAT", link: "https://www.bitsadmission.com/fd/BITSAT_cutoffs.html?06012025" },
  { title: "JAC Delhi", link: "https://jacdelhi.admissions.nic.in/" }
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-500/40 to-pink-500/40 bottom-0  flex flex-col gap-y-4 gap-x-8 w-full justify-between items-start pt-5 px-5 p-5 border-t-4  border-black dark:border-gray-100">
      <div className="grid md:flex w-full justify-between items-start gap-y-4">
        <div className="flex p-5 h-full flex-col gap-y-4 w-full md:w-1/3 justify-center items-center md:items-start text-center">
          <div className="flex gap-x-4 items-center justify-center md:justify-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-1/4 sm:w-1/5"
            />
            <p className="text-black glitchy-text font-semibold text-7xl sm:text-9xl dark:text-white">
              CRUX
            </p>
          </div>
          <p className="text-gray-800 dark:text-gray-200 text-sm md:text-xl w-full">
            CRUX does not own any of this data. The information presented here
            is scraped from official sources. Any inaccuracies or discrepancies
            in the data are not the responsibility of CRUX. Please refer to the
            official sources for verification.
          </p>
        </div>
        <div className="flex p-5 rounded-xl  flex-col gap-y-4 h-full w-full md:w-1/4 justify-start items-start">
          <p className="text-black dark:text-white font-semibold text-2xl md:text-3xl sm:text-4xl ">
            Quick Links
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
            {quickLinks.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="rounded-xl sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[4px_4px_0px_0px] shadow-[3px_3px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2 "
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex p-5 rounded-xl flex-col gap-y-4 w-full md:w-1/4 justify-start  h-full items-start">
          <p className="text-black dark:text-white font-semibold text-2xl md:text-3xl sm:text-4xl ">
            Official Sources
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
            {officialLinks.map((link) => (
              <a
                key={link.title}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[4px_4px_0px_0px] shadow-[3px_3px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-y-2 md:flex w-full px-3 py-5 justify-center border-t border-b border-black dark:border-white md:justify-between items-center gap-x-4 md:gap-x-16"> <p className="text-yellow-700 dark:text-yellow-500 text-sm md:text-xl text-center"> Found helpful?{" "}
        <a
          href="https://github.com/07calc/crux/"
          target="_blank"
          rel="noreferrer"
          className="underline font-bold text-xl md:text-2xl"
        >
          Give it a ⭐
        </a>
      </p>
        <a
          href="https://calc.is-a.dev"
          target="_blank"
          rel="noreferrer"
          className="text-xl text-center text-purple-700 dark:text-purple-400"
        >
          Made with ❤️ by <strong className="underline font-bold text-2xl">CalC</strong>
        </a>
      </div>
      <div className="text-center w-full text-9xl font-extrabold text-purple-500 
              leading-none select-none 
              md:text-[20rem]
              [mask-image:linear-gradient(to_bottom,white,transparent)] 
              ">
        CRUX
      </div>

    </footer>
  );
};
