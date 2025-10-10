import Link from "next/link"
import { FaSearch } from "react-icons/fa"
import { IoStatsChart } from "react-icons/io5"



export const CtaSection = () => {
  return (

    <section className="w-full py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
            Ready to Find Your Dream College?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Start your educational journey today with access to our
            comprehensive college database, cutoff trends, and authentic
            anonymous reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/explore"
              className="rounded-xl text-lg items-center justify-center flex text-black border-2 border-black transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 shadow-black dark:shadow-white bg-purple-400 px-6 py-3 font-medium"
            >
              Explore Colleges <FaSearch className="ml-2" />
            </Link>
            <Link
              href="/orcr"
              className="rounded-xl text-lg items-center justify-center flex text-black border-2 border-black transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 shadow-black dark:shadow-white bg-purple-300 px-6 py-3 font-medium"
            >
              View Cutoffs <IoStatsChart className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
