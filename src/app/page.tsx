import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaChartBar, FaComments } from "react-icons/fa";
import { IoRocketOutline, IoStatsChart, IoWarning } from "react-icons/io5";
import { MdCompare, MdOutlineSchool } from "react-icons/md";
import { Metadata } from "next";
import { GiSpikedBat } from "react-icons/gi";

export const metadata: Metadata = {
  title: "Crux | Discover & Explore Colleges in India",
  description:
    "Your ultimate platform for exploring Indian colleges, comparing options, and making informed educational decisions.",
};

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-16 backdrop-blur-md md:py-24 bg-gradient-to-br from-purple-400/80 via-purple-800/80 to-purple-400/80">
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
                <Link
                  href="/explore"
                  className="rounded-xl hover:scale-110 text-lg self-start items-center justify-center flex text-black border-2 border-black transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 shadow-black bg-purple-100 px-6 py-3 font-medium"
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

              {/* Floating Badge */}
              <div className="absolute -bottom-16 md:-bottom-5 -left-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-6 py-4 rounded-xl shadow-md rotate-6">
                <p className="text-lg font-bold">160+ Colleges</p>
                <p className="text-sm text-purple-100">
                  Comprehensive database
                </p>
              </div>

              {/* Caption Tag */}
              <div className="absolute -top-5 md:-top-4 -right-4 rotate-6 md:rotate-12">
                <Link
                  href="https://crux.ix.tc/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                  className="bg-purple-500 text-white text-base md:text-lg font-semibold px-4 py-2 rounded-xl border-2 border-white/20 shadow-lg hover:brightness-110 transition-all"
                >
                  IIIT Allahabad btw
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Why Choose Crux
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to make informed decisions about your academic
              future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 hover:scale-105 p-6 rounded-xl shadow-lg border-2 border-black dark:border-white hover:shadow-xl transition-all">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full mb-4">
                <FaSearch size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Comprehensive Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Find colleges based on location, majors, rankings, and more with
                our powerful search tools (not that powerful).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 hover:scale-105 p-6 rounded-xl shadow-lg border-2 border-black dark:border-white hover:shadow-xl transition-all">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full mb-4">
                <FaChartBar size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Accurate Data
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access the latest statistics on student demographics, NIRF
                rankings, and Cutoffs.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 hover:scale-105 p-6 rounded-xl shadow-lg border-2 border-black dark:border-white hover:shadow-xl transition-all">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full mb-4">
                <FaComments size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                Anonymous Reviews
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Read anonymous reviews and experiences from students directly on
                each college&apos;s page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cutoff Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="overflow-x-auto border-2  border-black px-4 dark:border-white shadow-purple-500  rounded-lg max-w-[100vw] -mx-4 sm:mx-0 bg-gray-300 dark:bg-[#222222]">
                <table className="min-w-full border-collapse text-left font-thin">
                  <thead>
                    <tr className="min-w-max">
                      <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                        <span>Institute</span>
                      </th>
                      <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                        <span>Program</span>
                      </th>
                      <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                        <span>Gender</span>
                      </th>
                      <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                        <span>Open</span>
                      </th>
                      <th className="text-md lg:text-lg xl:text-2xl text-center text-purple-600 dark:text-purple-400 font-bold border-b border-black dark:border-white px-2 md:px-4 py-2">
                        <span>Close</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="min-w-max">
                    <tr className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white cursor-pointer hover:text-white">
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        <Link
                          href={
                            "https://crux.ix.tc/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                          }
                        >
                          IIITA
                        </Link>
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        IT
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        Neutral
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        950
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        5870
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white cursor-pointer hover:text-white">
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        <Link
                          href={
                            "https://crux.ix.tc/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                          }
                        >
                          IIITA
                        </Link>
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        IT
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        Female
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        2818
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        11259
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white cursor-pointer hover:text-white">
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        <Link
                          href={
                            "https://crux.ix.tc/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                          }
                        >
                          IIITA
                        </Link>
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        IT-BI
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        Neutral
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        3281
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        6192
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white cursor-pointer hover:text-white">
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        <Link
                          href={
                            "https://crux.ix.tc/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                          }
                        >
                          IIITA
                        </Link>
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        IT-BI
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        Female
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        8616
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        11529
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white cursor-pointer hover:text-white">
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        <Link
                          href={
                            "https://crux.ix.tc/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                          }
                        >
                          IIITA
                        </Link>
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        ECE
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        Neutral
                      </td>

                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        5249
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        9200
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-500 hover:dark:bg-[#444444] text-black dark:text-white cursor-pointer hover:text-white">
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        <Link
                          href={
                            "https://crux.ix.tc/explore/c19b3fc1-f70c-48c5-997f-51dfcb3b4c79"
                          }
                        >
                          IIITA
                        </Link>
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        ECE
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        Female
                      </td>

                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        10761
                      </td>
                      <td className="text-sm md:text-md lg:text-xl text-center border-t border-black font-thin dark:border-white px-2 md:px-4 py-2">
                        14522
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex-1 order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                Previous Year Cutoffs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Access detailed historical data on opening and closing ranks for
                various programs across colleges in JoSAA and CSAB counseling
                rounds.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  JoSAA Cutoffs
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  CSAB Trends
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  BITS Pilani (Coming Soon)
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                  JAC Delhi (Coming Soon)
                </span>
              </div>
              <Link
                href="/orcr"
                className="mt-8 rounded-xl inline-flex items-center text-lg text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 dark:shadow-white shadow-black bg-purple-300 dark:bg-purple-700 p-3"
              >
                Explore All Cutoffs <IoStatsChart className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Showcase Section */}
      <section className="w-full py-16 md:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              Student Voices
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Anonymous reviews from students, available directly on each
              college page
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-black dark:border-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center text-lg font-bold text-purple-700 dark:text-purple-200 mr-4">
                  <FaComments />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white">
                    Anonymous
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Indian Insititute of Information Technology, Allahabad
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &quot;Placements go brrrrrrr&quot;
              </p>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-black dark:border-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center text-lg font-bold text-purple-700 dark:text-purple-200 mr-4">
                  <FaComments />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white">
                    Anonymous
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    S.R.M Institute of Science and Technology
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &quot;Daaru Sutta Moj masti&quot;
              </p>
              <div className="flex items-center text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    className="text-gray-300 dark:text-gray-600"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-black dark:border-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center text-lg font-bold text-purple-700 dark:text-purple-200 mr-4">
                  <FaComments />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white">
                    Anonymous
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Vellore Institute of Technology
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                &quot;Gender Ratio 😍😍😍&quot;
              </p>
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 dark:text-gray-300">
              Reviews are available on individual college pages. Visit a college
              page to read authentic student feedback.
            </p>
            <Link
              href="/explore"
              className="mt-6 rounded-xl text-lg inline-flex items-center justify-center text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 dark:shadow-white shadow-black bg-purple-300 dark:bg-purple-700 px-6 py-3 font-medium"
            >
              Explore Colleges <FaSearch className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bonk Feature Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-black">
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

      {/* Coming Soon Features */}
      <section className="w-full py-16 md:py-20 bg-purple-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
            <IoRocketOutline size={300} color="rgba(255,255,255,0.1)" />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Coming Soon to Crux
            </h2>
            <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
              We&apos;re constantly improving! Here&apos;s what&apos;s in our
              development pipeline:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-purple-300 text-purple-800 rounded-full mb-4">
                  <MdCompare size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  College Comparison Tool
                </h3>
                <p className="text-purple-100">
                  Compare colleges side-by-side across various parameters to
                  make smarter choices.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
                <div className="w-14 h-14 mx-auto flex items-center justify-center bg-purple-300 text-purple-800 rounded-full mb-4">
                  <MdOutlineSchool size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  BITS & JAC Delhi Cutoffs
                </h3>
                <p className="text-purple-100">
                  Extended coverage for BITS Pilani and JAC Delhi counseling
                  data and cutoff trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-white dark:bg-black">
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

      {/* Stats Section */}
      <section className="w-full py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
                160+
              </p>
              <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                Colleges
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
                20+
              </p>
              <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                Cities
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
                2+
              </p>
              <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                Years of Cutoff Data
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
                20+
              </p>
              <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
                Anonymous Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section - Glassmorphic */}
      <section className="w-full px-4 md:px-20">
        <div className="mb-8 bg-white/10 backdrop-blur-md border border-white/30 p-5 rounded-xl shadow-lg relative overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 z-0"></div>
          <div className="flex items-center relative z-10">
            <IoWarning className="text-yellow-400 text-4xl md:text-8xl mr-4 animate-pulse" />
            <div>
              <h3 className="text-lg md:text-2xl font-bold text-black dark:text-white mb-1">
                Under Development
              </h3>
              <p className="dark:text-white/80 text-black/80 md:text-xl">
                Heads up! This site is a work in progress. You may encounter
                bugs or incomplete features as we continue to build and improve.
                Thanks for your patience!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
