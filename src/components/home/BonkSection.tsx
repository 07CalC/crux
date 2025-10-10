import Link from "next/link"
import { GiSpikedBat } from "react-icons/gi"



export const BonkSection = () => {
  return (

    <section className="mx-2 md:mx-4 rounded-2xl py-16 px-4 sm:px-8 bg-white dark:bg-zinc-900 shadow-[0_4px_20px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.05)] border border-gray-200 dark:border-white/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
              Bonk Your College
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Express your support and help other students discover great
              colleges through &quot;Bonk&quot;. Each college has a Bonk count
              that shows its popularity among students.
            </p>
            <div className="space-y-4">
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <GiSpikedBat className="text-white text-3xl" />
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    Bonk your college
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Show your support for your institution
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    Compare Bonk counts
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    See which colleges are most popular
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-black dark:text-white">
                    Community perspective
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Get insights from collective student opinions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border-2 border-black dark:border-white">
              <div className="p-6">
                <h3 className="text-xl font-bold text-center mb-4 text-black dark:text-white">
                  Top Bonked Colleges
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <span className="font-bold text-black dark:text-white">
                      IIT Bombay
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                        2,543 Bonks
                      </span>
                      <button className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                        <GiSpikedBat className="text-white text-2xl" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <span className="font-bold text-black dark:text-white">
                      IIIT Allahabad
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                        2,187 Bonks
                      </span>
                      <button className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                        <GiSpikedBat className="text-white text-2xl" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <span className="font-bold text-black dark:text-white">
                      NIT Surathkal
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                        1,845 Bonks
                      </span>
                      <button className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                        <GiSpikedBat className="text-white text-2xl" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <span className="font-bold text-black dark:text-white">
                      BITS Pilani
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                        1,623 Bonks
                      </span>
                      <button className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                        <GiSpikedBat className="text-white text-2xl" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <span className="font-bold text-black dark:text-white">
                      IIT Madras
                    </span>
                    <div className="flex items-center space-x-2">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                        1,512 Bonks
                      </span>
                      <button className="p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors">
                        <GiSpikedBat className="text-white text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/explore"
                    className="rounded-xl text-sm inline-flex items-center justify-center text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 dark:shadow-white shadow-black bg-purple-300 dark:bg-purple-700 px-4 py-2"
                  >
                    See All Colleges
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
