import Link from "next/link";
import { FaComments, FaSearch } from "react-icons/fa";



export const StudentReviewsSection = () => {

  const studentReviews = [
    {
      college: "IIIT Allahabad",
      review: "Placements go brrrrrrr",
      rating: 4,
    },
    {
      college: "IIT Bombay",
      review: "no review needed",
      rating: 5,
    },
    {
      college: "VIT",
      review: "Gender Ratio 😍😍😍",
      rating: 3,
    },
  ];
  return (
    <section className="w-full py-16">
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
          {studentReviews.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg border-2 border-black dark:border-white"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 dark:bg-purple-700 rounded-full flex items-center justify-center mr-4">
                  <FaComments className="text-xl text-purple-700 dark:text-purple-200" />
                </div>
                <div>
                  <p className="font-bold text-black dark:text-white">Anonymous</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.college}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">&quot;{item.review}&quot;</p>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < item.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
                      }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
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

  )
}
