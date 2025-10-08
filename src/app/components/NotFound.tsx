import Image from "next/image"


export const NotFound = ({text}: {text: string}) => {
    return (
        <div className="flex flex-col py-10 w-full gap-y-4 justify-center items-center">
                <p className="text-black font-semibold text-3xl sm:text-4xl dark:text-white">{text}</p>
                <Image src="/cat.png" alt="loading" width={1000} height={1000} className="w-4/6 sm:w-1/4 "/>
            
        </div>
    )
}