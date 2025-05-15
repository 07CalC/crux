import { AddReview } from "@/app/components/AddReview";
import { Bonk } from "@/app/components/Bonk";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { IoWarning } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

export async function generateMetadata({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params
    const prisma = new PrismaClient();
    const college = await prisma.college.findUnique({
        where: {
            id: id[0],
        },
    });
    return {
        title: college?.name,
        description: `Find all the information about ${college?.name} here.`,
        openGraph: {
            title: college,
            description: `Find all the information about ${college?.name} here.`,
            url: `https://crux.ix.tc/college/${id[0]}`,
            siteName: "Crux",
            images: [
                {
                    url: college?.coverImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s",
                    width: 800,
                    height: 600,
                },
            ],
        },
        authors: [
            {
                name: "CalC",
                url: "https://calc.is-a.dev",
            },
        ],
        twitter: {
            card: 'summary_large_image',
            title: college?.name,
            description: `Find all the information about ${college?.name} here.`,
            images: [`${college?.coverImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s"}`],
          },
        
    }
}

export default async function College({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
    const { id } = await params
    const prisma = new PrismaClient();
    const college = await prisma.college.findUnique({
        where: {
            id: id[0],
        },
    });
    const reviews = await prisma.review.findMany({
        where: {
            collegeId: college?.id,
        },
    });
    let genderRatio = "N/A";
    if (college?.maleStudents && college?.femaleStudents && college.maleStudents + college.femaleStudents > 0) {
        const malePercent = Math.round((college.maleStudents / (college.maleStudents + college.femaleStudents)) * 100);
        const femalePercent = 100 - malePercent;
        genderRatio = `${malePercent}:${femalePercent}`;
    }
    
    return(
        <div className="w-full min-h-screen flex flex-col">
            <div className="w-full h-[60vh] relative">
                <img
                    src={college?.coverImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s"} 
                    alt={`${college?.name} cover image`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className="w-full px-4 md:px-8 mt-6">
                <div className="mb-8 text-left mx-auto items-start justify-between flex flex-col md:flex-row gap-y-3
                 ">
                    <div className="flex flex-col gap-y-3">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black dark:text-white">{college?.name}</h1>
                    <p className="text-purple-700 dark:text-purple-300 text-lg md:text-2xl mt-2">{college?.location}</p>
                    <Bonk clgId={college?.id || ""} bonksCount={college?.bongs || 0}/>
                    </div>
                    <div className="flex gap-x-4">
                    
                    <a href={college?.officialWebsite || "#"} target="_blank" rel="noreferrer" className={`gap-x-3 self-start rounded-xl sm:text-lg items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2`}>
                        Official Website <LuExternalLink />
                    </a>
                    </div>
                </div>

                {college?.moderated === false && (
                    <div className="mb-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md w-full">
                        <div className="flex items-center">
                            <IoWarning className="text-yellow-600 text-5xl mr-2" />
                            <p className="text-yellow-700 text-xl">
                                <strong>Warning:</strong> The information about this college has not been independently verified and may include content submitted by anonymous users. Please exercise discretion and verify details from official sources before relying on them.
                            </p>
                        </div>
                    </div>
                )}

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-2 gap-6">
                        <div className="bg-gray-300 dark:bg-[#222222] p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Total Students</h3>
                            <p className="text-3xl font-bold text-black dark:text-white">{college?.totalStudents?.toLocaleString() || "N/A"}</p>
                        </div>
                        
                        <div className="bg-gray-300 dark:bg-[#222222] p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Gender Ratio (M:F)</h3>
                            <p className="text-3xl font-bold text-black dark:text-white">{genderRatio}</p>
                        </div>
                        
                        <div className="bg-gray-300 dark:bg-[#222222] p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Male Students</h3>
                            <p className="text-3xl font-bold text-black dark:text-white">{college?.maleStudents?.toLocaleString() || "N/A"}</p>
                        </div>
                        
                        <div className="bg-gray-300 dark:bg-[#222222] p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold text-gray-500 dark:text-gray-400">Female Students</h3>
                            <p className="text-3xl font-bold text-black dark:text-white">{college?.femaleStudents?.toLocaleString() || "N/A"}</p>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1 flex">
                        {college?.nirf ? (
                            <div className="w-full bg-purple-300 dark:bg-purple-900 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                                <h3 className="text-3xl font-bold text-purple-800 dark:text-purple-200">NIRF Ranking</h3>
                                <p className="text-4xl font-bold text-black dark:text-white mt-2">{college.nirf}</p>
                            </div>
                        ) : (
                            <div className="w-full bg-purple-300 dark:bg-purple-900 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                                <h3 className="text-3xl font-bold text-purple-800 dark:text-purple-200">NIRF Ranking</h3>
                                <p className="text-4xl font-bold text-black dark:text-white mt-2">N/A</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-10 mb-10 w-full gap-y-5 flex flex-col">
                    <h2 className="text-3xl font-bold text-black dark:text-white mb-6">Student Reviews</h2>
                    <AddReview clgId={college?.id || ""} />
                    {reviews.length > 0 ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {reviews.map((review) => (
                                    <div key={review.id} className="bg-gray-300 dark:bg-[#222222] p-6 rounded-lg shadow-md border-2 border-black dark:border-white hover:shadow-xl transition-all">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                                A
                                            </div>
                                            <div>
                                                <p className="font-bold text-black dark:text-white">Anonymous</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{new Date(review.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        
                                        <p className="text-black dark:text-white mb-4">{review.comment}</p>
                                        
                                        <div className="flex items-center">
                                            <div className="flex items-center text-yellow-400 mr-2">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < review.rating ? "" : "text-gray-300 dark:text-gray-600"}`} viewBox="0 0 20 20" fill="currentColor">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{review.rating}/5</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-6 text-center">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Showing {reviews.length} {reviews.length === 1 ? "review" : "reviews"} for {college?.name}
                                </p>
                            </div>
                        </>
                    ) : (
                        <div className="bg-gray-300 dark:bg-[#222222] p-8 rounded-lg shadow-md text-center">
                            <div className="flex flex-col items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-2">No Reviews Yet</h3>
                                <p className="text-gray-500 dark:text-gray-400 mb-6">Be the first to share your experience at {college?.name}</p>
                                
                            </div>
                        </div>
                    )}
                </div>

                <div className="mt-10 w-full relative border border-purple-500 bg-purple-500/10 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
                    <p className="text-3xl font-bold text-black dark:text-white text-center mb-4">More details about {college?.name} coming soon</p>
                    <div className="flex flex-col items-center">
                        <div className="mb-4 max-w-xs mx-auto z-20 relative">
                            <div className="text-xl font-bold p-3 bg-gray-300 dark:bg-[#222222] rounded-lg shadow-md border-2 border-purple-500 mb-2 text-black dark:text-white text-center">
                                literally me working hard to deliver fast
                            </div>
                            <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-purple-500 mx-auto"></div>
                        </div>
                        
                        <Image 
                            src="/racoon.jpg" 
                            alt="coming soon" 
                            width={400} 
                            height={400} 
                            className="w-full max-w-sm object-contain relative z-10" 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
