import Image from "next/image"


export const Loading = () => {
    return (
        <div className="flex flex-col py-10 w-full gap-y-4 justify-center items-center">
            <p className="text-black font-semibold text-3xl sm:text-4xl dark:text-white">Loading...</p>
            <Image src="/loadingCat2.gif" alt="loading" width={100} height={100} className="w-4/6 sm:w-1/4 " />

        </div>
    )
}

// <Image unoptimized src="/loading.gif" alt="loading" width={100} height={100} />
