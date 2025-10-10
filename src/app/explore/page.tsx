import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { NotFound } from "../../components/common/NotFound";
import { prisma } from "@/lib/prisma";


export async function generateStaticParams() {
  return [{},];
}

type SearchParams = {
  query?: string;
};

type PageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Explore({ searchParams }: PageProps) {
  const query = (await searchParams).query?.trim() || "";

  const colleges = await prisma.college.findMany({
    where: {
      OR: [{ name: { contains: query as string, mode: "insensitive" } }],
    },
    orderBy: {
      bongs: "desc"
    },
    select: {
      id: true,
      name: true,
      location: true,
      nirf: true,
      bongs: true,
      coverImage: true,
      officialWebsite: true,
    }
  });

  const hasFilters = query;

  return (
    <div className="md:px-10 px-2 mx-auto py-12 w-full relative">
      <div className="mb-10">
        <form className="flex flex-col md:flex-row gap-4 bg-white dark:bg-[#1a1a1a]   transition-all 
  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
  dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]
 p-4 rounded-xl max-w-2xl">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                id="query"
                name="query"
                defaultValue={query}
                placeholder="Search by college name"
                className="p-2 active:ring-0 ring-0 w-full border-2 text-lg font-semibold border-black dark:border-gray-100 rounded-lg bg-gray-200 dark:bg-[#222222] text-black dark:text-gray-100"
              />
              <IoSearch
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div className="flex space-x-5 justify-center self-end">
            <button
              type="submit"
              className="rounded-xl gap-x-3 sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white shadow-black bg-purple-500 p-2"
            >
              Search
              <IoSearch className="mr-2" size={25} />
            </button>

            {hasFilters && (
              <Link
                href="/explore"
                className="rounded-xl sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white shadow-black bg-purple-500 p-2"
                scroll={true}
              >
                Clear
              </Link>
            )}
          </div>
        </form>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-300">
          Found {colleges.length}{" "}
          {colleges.length === 1 ? "college" : "colleges"}
          {query && ` matching "${query}"`}
        </p>
      </div>

      {/* College Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
        {colleges.length > 0 ? (
          colleges.map((college) => (
            <div
              key={college.id}
              className="flex flex-col h-full rounded-xl overflow-hidden bg-white dark:bg-[#1a1a1a] border border-black   
  transition-all 
  ease-in-out 
  duration-200 
  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
  dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
  hover:-translate-y-1 
  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
  dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 
"
            >
              <Link
                href={`/explore/${college.id}`}
                className="flex flex-col h-64 relative group"
                scroll={true}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <img
                  loading="lazy"
                  src={
                    college?.coverImage ||
                    "/defaultCollegeImage.png"
                  }
                  alt={`${college.name} cover image`}
                  className="w-full h-full object-cover rounded-t-xl"
                />
              </Link>
              <div className="p-4 flex flex-col flex-grow">
                <Link href={`/explore/${college.id}`} scroll={true}>
                  <h2 className="text-black font-semibold text-xl sm:text-2xl mb-2 dark:text-white hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    {college.name}
                  </h2>
                </Link>
                <p className="text-purple-500 text-sm md:text-lg mb-4">
                  {college.location}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <p className="text-black dark:text-white font-bold text-sm md:text-xl">
                    {college.nirf ? `NIRF: ${college.nirf}` : ""}
                  </p>
                  <p className="text-black dark:text-white font-bold text-sm md:text-xl">
                    Bonks: {college.bongs}
                  </p>
                  <a
                    href={college.officialWebsite || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-xl text-sm md:text-lg flex items-center gap-2 text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 dark:shadow-white shadow-black bg-purple-500 px-3 py-2 ${!college.officialWebsite
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-purple-600"
                      }`}
                  >
                    <LuExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <NotFound text="No colleges found" />
            <Link
              href="/explore"
              className=" inline-block text-purple-500 hover:text-purple-700"
              scroll={true}
            >
              Clear filters and show all colleges
            </Link>
          </div>
        )}
      </div>

      <div id="top" className="absolute top-0 left-0" />

    </div>
  );
}
