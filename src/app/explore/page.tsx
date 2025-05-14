import { PrismaClient } from "@prisma/client";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

export default async function Explore() {
    const prisma = new PrismaClient()
    const colleges = await prisma.college.findMany()
    return (
        <div className="md:px-10 px-2 mx-auto py-12 w-full">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8">
                {colleges.map((college) => (
                    <div key={college.id} className="flex flex-col h-full rounded-xl overflow-hidden bg-gray-300 dark:bg-[#222222] shadow-lg border border-black dark:border-gray-300 hover:shadow-xl transition-all duration-300">
                        <Link href={`/college/${college.id}`} className="flex flex-col h-64 relative group">
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                            <img 
                                loading="lazy" 
                                src={college?.coverImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s"} 
                                alt={`${college.name} cover image`} 
                                className="w-full h-full object-cover rounded-t-xl" 
                            />
                        </Link>
                        <div className="p-4 flex flex-col flex-grow">
                            <Link href={`/college/${college.id}`}>
                                <h2 className="text-black font-semibold text-xl sm:text-2xl mb-2 dark:text-white hover:text-purple-700 dark:hover:text-purple-300 transition-colors">{college.name}</h2>
                            </Link>
                            <p className="text-purple-500 text-lg mb-4">{college.location}</p>
                            
                            <div className="flex justify-end items-center mt-auto">
                                <a 
                                    href={college.officialWebsite || "#"} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className={`rounded-xl text-sm md:text-lg flex items-center gap-2 text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 dark:shadow-white shadow-black bg-purple-500 px-3 py-2 ${!college.officialWebsite ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600'}`}
                                >
                                    Official Website <LuExternalLink />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}