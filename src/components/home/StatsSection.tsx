



export const StatsSection = () => {
  return (

    <section className="w-full py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
              170+
            </p>
            <p className="text-md md:text-lg mt-2 text-gray-600 dark:text-gray-300">
              Colleges
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
              50+
            </p>
            <p className="text-md md:text-lg mt-2 text-gray-600 dark:text-gray-300">
              Cities
            </p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
              3+
            </p>
            <p className="text-md md:text-lg mt-2 text-gray-600 dark:text-gray-300">
              Y/O Data
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
