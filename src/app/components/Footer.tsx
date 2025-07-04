import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { title: "Orcr", link: "/orcr" },
  { title: "Nirf", link: "/nirf" },
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
    <footer className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 bottom-0  flex flex-col gap-y-4 gap-x-8 w-full justify-between items-start pt-5 px-5 p-5 border-t-4  border-black dark:border-gray-100">
      <div className="grid md:flex w-full justify-between items-start gap-y-4">
        <div className="flex p-5 h-full flex-col gap-y-4 w-full md:w-1/3 justify-center items-center md:items-start">
          <div className="flex gap-x-4 items-center justify-center md:justify-start">
            <Image
              src="/logo.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="w-1/4 sm:w-1/5"
            />
            <p className="text-black glitchy-text font-semibold text-5xl sm:text-8xl dark:text-white">
              CRUX
            </p>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm md:text-xl w-full">
            CRUX does not own any of this data. The information presented here
            is scraped from official sources. Any inaccuracies or discrepancies
            in the data are not the responsibility of CRUX. Please refer to the
            official sources for verification.
          </p>
        </div>
        <div className="flex p-5 rounded-xl bg-purple-500 shadow-[6px_6px_0px_0px] shadow-black dark:shadow-white flex-col gap-y-4 h-full w-full md:w-1/4 justify-start items-start">
          <p className="text-black font-semibold text-2xl md:text-3xl sm:text-4xl ">
            Quick Links
          </p>
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="hover:text-gray-100 text-gray-900 text-lg md:text-2xl w-full text-start "
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex p-5 rounded-xl bg-purple-500 shadow-[6px_6px_0px_0px] shadow-black dark:shadow-white flex-col gap-y-4 w-full md:w-1/4 justify-start  h-full items-start">
          <p className="text-black font-semibold text-xl md:text-3xl sm:text-4xl ">
            Official Sources
          </p>
          {officialLinks.map((link) => (
            <a
              key={link.title}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-100 text-gray-900 text-lg md:text-2xl w-full text-start "
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-y-2 md:flex w-full px-5 pt-2 border-t border-gray-600 dark:border-gray-100 justify-start md:justify-center items-center gap-x-4 md:gap-x-16">
        <p className="text-yellow-700 dark:text-yellow-500 text-sm md:text-xl text-start md:text-center">
          Found helpful?{" "}
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
    </footer>
  );
};
