import Image from "next/image"
import Link from "next/link"
import { FaSearch } from "react-icons/fa"


export const HeroSection = () => {
  return (
    <section id="hero" className="w-full py-16 backdrop-blur-md md:py-24 bg-gradient-to-br from-purple-400/80 via-purple-800/80 to-purple-400/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl flex flex-col md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Discover Your{" "}
              <span className="text-purple-950 glitchy-text neon-text">
                Perfect
              </span>{" "}
              College Journey
            </h1>
            <p className="text-lg md:text-2xl text-purple-100 mb-8 max-w-2xl">
              Explore comprehensive information about colleges across India.
              Make informed decisions with accurate data, rankings, and
              authentic student reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link id="survey"
                href="/explore"
                className="rounded-xl text-lg self-start items-center justify-center flex text-black border-2 border-black transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 shadow-black bg-purple-100 px-6 py-3 font-medium"
              >
                Explore Colleges <FaSearch className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] transform hover:rotate-3 hover:scale-105 transition-transform duration-500 rotate-1">
              <Image
                src="/iiita.jpeg"
                alt="College campus"
                width={1000}
                height={600}
                className="object-cover rounded-3xl border-4 border-white"
                priority
              />
            </div>

            <div className="absolute -bottom-16 md:-bottom-5 -left-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 py-4 rounded-xl shadow-md rotate-6">
              <p className="text-lg font-bold">170+ Colleges</p>
              <p className="text-sm text-purple-100">
                Comprehensive database
              </p>
            </div>

            <div className="absolute -top-5 md:-top-4 -right-4 rotate-6 md:rotate-12">
              <Link
                href="/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                className="bg-white dark:bg-[#1a1a1a] w-full text-black dark:text-white text-base md:text-lg font-semibold px-4 py-2 rounded-xl border-2 border-white/20 shadow-lg hover:brightness-110 transition-all"
              >
                IIIT Allahabad btw
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
