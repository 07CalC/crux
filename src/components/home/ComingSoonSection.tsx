import { FaHashtag } from "react-icons/fa"
import { IoRocketOutline } from "react-icons/io5"
import { MdCompare, MdOutlineSchool } from "react-icons/md"


export const ComingSoonSection = () => {
  return (

    <section className="w-full py-16 bg-purple-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full">
        {/* Rocket icon in bottom right */}
        <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
          <IoRocketOutline size={300} color="rgba(255,255,255,0.1)" />
        </div>

        {/* Hashtag icon in top left */}
        <div className="absolute left-4 top-4 transform -translate-x-1/4 -translate-y-1/4">
          <FaHashtag size={280} color="rgba(255,255,255,0.1)" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Coming Soon to Crux
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            We&apos;re constantly improving! Here&apos;s what&apos;s in our development pipeline:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-purple-300 text-purple-800 rounded-full mb-4">
                <MdCompare size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">College Comparison Tool</h3>
              <p className="text-purple-100">
                Compare colleges side-by-side across various parameters to make smarter choices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-purple-300 text-purple-800 rounded-full mb-4">
                <MdOutlineSchool size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">JAC Delhi Cutoffs</h3>
              <p className="text-purple-100">
                Extended coverage for JAC Delhi counselling data and cutoff trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
