import { PrismaClient } from "@prisma/client";
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";

export default async function Explore() {
    const prisma = new PrismaClient()
    const colleges = await prisma.college.findMany()
    return (
        <div className="grid sm:grid-cols-3 grid-cols-1 px-5 py-10 w-full h-full gap-8 justify-center items-center">
            {colleges.map((college) => (
                <div className="flex flex-col h-full w-full rounded-xl gap-y-2 text-start bg-gray-300 dark:bg-[#222222] shadow-lg border border-black dark:border-gray-300">
                    <Link href={`/college/${college.id}`} key={college.id} className="flex flex-col h-2/3 w-full gap-y-4">
                    <img src={college?.coverImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxaU9SIVC1AZUv0jJW0WtEs0IgZlw0iiFs-w&s"} alt={"Cover Image"} className="w-full h-full rounded-t-xl" />
                    <p className="text-black mx-4 font-semibold text-start text-xl sm:text-2xl dark:text-white">{college.name}</p>
                   </Link>
                    <div className="flex justify-between pr-4 items-center mx-4 mb-4">
                    <p className="">{college.location}</p>
                    <a href={college.officialWebsite || undefined} target="_blank" rel="noreferrer" className="rounded-xl sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black bg-purple-500 p-2"><LuExternalLink /></a>
                    </div>
                </div>
            ))}
        </div>
    )
}