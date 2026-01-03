import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
import { FiSearch, FiX, FiMapPin, FiAward, FiHeart, FiExternalLink } from "react-icons/fi";
import { NotFound } from "../../components/common/NotFound";
import { prisma } from "@/lib/prisma";

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
      name: { contains: query as string, mode: "insensitive" },
      OR: [
        { collegeType: { not: "NEET_PG" } },
        { collegeType: null }
      ]
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
    <section className="section min-h-screen bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5">
      <div className="container-custom">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 badge-primary">
            <FiSearch className="w-4 h-4" />
            <span className="text-sm font-semibold">Discover Your Future</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Explore <span className="text-gradient">Colleges</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through 170+ engineering colleges with detailed information, rankings, and student reviews.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-10 max-w-3xl mx-auto">
          <form className="card p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  id="query"
                  name="query"
                  defaultValue={query}
                  placeholder="Search by college name..."
                  className="input pl-12 pr-4"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="btn-primary group"
                >
                  <FiSearch className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Search</span>
                </button>

                {hasFilters && (
                  <Link
                    href="/explore"
                    className="btn-outline group"
                    scroll={true}
                  >
                    <FiX className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                    <span>Clear</span>
                  </Link>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm md:text-base text-muted-foreground">
            Found <span className="font-bold text-foreground">{colleges.length}</span>{" "}
            {colleges.length === 1 ? "college" : "colleges"}
            {query && (
              <span>
                {" "}matching <span className="font-semibold text-primary">"{query}"</span>
              </span>
            )}
          </p>
        </div>

        {/* College Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <div
                key={college.id}
                className="group card card-hover overflow-hidden p-0 h-full flex flex-col"
              >
                {/* Image */}
                <Link
                  href={`/explore/${college.id}`}
                  className="relative h-48 overflow-hidden"
                  scroll={true}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    loading="lazy"
                    src={college?.coverImage || "/defaultCollegeImage.png"}
                    alt={`${college.name} cover image`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay badge */}
                  {college.nirf && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="badge-primary backdrop-blur-sm bg-primary/90 text-primary-foreground">
                        <FiAward className="w-3 h-3" />
                        <span className="font-bold">NIRF {college.nirf}</span>
                      </div>
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <Link href={`/explore/${college.id}`} scroll={true} className="group/title">
                    <h2 className="text-lg md:text-xl font-bold mb-2 group-hover/title:text-primary transition-colors line-clamp-2">
                      {college.name}
                    </h2>
                  </Link>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <FiMapPin className="w-4 h-4 text-secondary" />
                    <span>{college.location}</span>
                  </div>

                  {/* Stats & Actions */}
                  <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-3 text-sm">
                      {college.nirf && (
                        <div className="flex items-center gap-1">
                          <FiAward className="w-4 h-4 text-accent" />
                          <span className="font-semibold">{college.nirf}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <FiHeart className="w-4 h-4 text-secondary" />
                        <span className="font-semibold">{college.bongs}</span>
                      </div>
                    </div>

                    <a
                      href={college.officialWebsite || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn-ghost p-2 group/link ${
                        !college.officialWebsite
                          ? "opacity-50 cursor-not-allowed pointer-events-none"
                          : ""
                      }`}
                      aria-label="Visit official website"
                    >
                      <FiExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full">
              <div className="card text-center py-16">
                <NotFound text="No colleges found" />
                {hasFilters && (
                  <Link
                    href="/explore"
                    className="inline-flex items-center gap-2 mt-6 text-primary hover:text-secondary font-semibold transition-colors"
                    scroll={true}
                  >
                    <FiX className="w-4 h-4" />
                    <span>Clear filters and show all colleges</span>
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
