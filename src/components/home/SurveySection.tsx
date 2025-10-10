import Link from "next/link"




export const SurveySection = () => {
  return (

    <section className="w-full py-8 px-4 lg:px-16 bg-clip-padding  bg-opacity-5 border border-white/30 bg-pink-500/30 z-0 rounded-xl shadow-lg relative overflow-hidden">
      <div className="flex flex-col items-center justify-center md:flex-row text-center relative z-10">
        <div className="flex flex-col items-center justify-center w-full">
          <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-1">
            Help us improve CRUX
          </h3>
          <p className="dark:text-white/80 font-semibold text-black/80 md:text-xl mb-1">
            Which branch in which IIT do you think is better?
          </p>
          <p className="dark:text-white/80 font-semibold text-black/80 md:text-xl mb-4">
            Every choice you make helps us improve our recommendations for future students.
          </p>

          <Link href="/iit/preference" className="rounded-xl w-auto mx-auto text-lg self-start items-center justify-center flex text-black border-2 border-black transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 shadow-black bg-purple-100 px-6 py-3 font-medium"
          >
            Take the Survey
          </Link>
        </div>
      </div>
    </section >

  )
}

