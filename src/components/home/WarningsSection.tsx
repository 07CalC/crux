import { IoWarning } from "react-icons/io5"



export const WarningsSection = () => {
  return (
    <>
      <section className="w-full mt-5 text-black dark:text-white px-4 flex flex-col md:flex-row items-center justify-center">
        <IoWarning className="text-red-500 animate-pulse mr-2 size-28 lg:size-10" />
        <p className="text-lg md:text-xl text-center">
          The NIRF details such as NIRF ranking and students statistics are outdated and will be updated soon.

        </p>
      </section>

      <section className="w-full px-4 pt-16 md:px-20">
        <div className="bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-white/30 p-5 rounded-xl shadow-lg relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 z-0"></div>
          <div className="flex items-center relative z-10">
            <IoWarning className="text-yellow-400 text-4xl md:text-8xl mr-4 animate-pulse" />
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-1">
                Under Development
              </h3>
              <p className="dark:text-white/80 text-black/80 md:text-xl">
                Heads up! We&apos;re still working on this site, so you might notice some rough edges. Thanks for sticking with us while we make things better!
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
