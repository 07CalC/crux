
import Link from "next/link";
import Image from "next/image";

const options = [
  {
    name: "JoSAA",
    image: "/jossa.jpg",
    done: true,
    href: "/orcr/jossa",
    description: "IITs, NITs, IIITs, and GFTIs admissions",
  },
  {
    name: "CSAB",
    image: "/csab.jpg",
    done: true,
    href: "/orcr/csab",
    description: "Special vacant seat rounds for NITs, IIITs, GFTIs",
  },
  {
    name: "BITSAT",
    image: "/bits.png",
    done: true,
    href: "/orcr/bitsat",
    description: "BITS Pilani, Goa, Hyderabad",
  },
  {
    name: "JAC",
    image: "/jac.jpeg",
    done: false,
    href: "/orcr/jac",
    description: "DTU, NSUT, IGDTUW, IIIT-D (Delhi Region)",
  },
];

export default function Orcr() {
  return (
    <section className="w-full px-4 py-16 ">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-6">
          {options.map((option) => (
            <div
              key={option.name}
              className={`
  w-full
  rounded-xl 
  bg-gray-50 dark:bg-[#1a1a1a]
  overflow-hidden 
  transition-all 
  ease-in-out 
  duration-200 
  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
  dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
  hover:-translate-y-1 
  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
  dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
  p-4
  py-8
  border-2 border-black dark:border-white
  ${!option.done ? "opacity-80 cursor-not-allowed" : ""}
`}
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/20 shadow-sm">
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    className="object-cover hover:scale-110 rounded-full border-2 border-black dark:border-white transition-transform duration-200"
                  />
                </div>
                <h3 className="text-3xl text-purple-500 font-bold">{option.name}</h3>
              </div>
              <p className="mt-4 text-gray-900 dark:text-white/80 text-lg md:text-xl">
                {option.description}
              </p>

              {/* Explore Button */}
              <div className="flex justify-end mt-6">
                <Link
                  href={option.href}
                  className={`rounded-xl sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[4px_4px_0px_0px] shadow-[3px_3px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 p-2 dark:shadow-white shadow-black bg-purple-500 px-2 text-center ${!option.done ? "cursor-not-allowed" : ""}`}
                >
                  {option.done ? "Explore →" : "Coming Soon"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
