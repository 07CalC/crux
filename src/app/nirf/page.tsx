import Image from "next/image";
import { ComingSoon } from "../../components/common/ComingSoon";



export default async function Nirf() {
    return (
        <div className="flex flex-col py-10 w-full h-full gap-y-4 justify-center items-center">
            <ComingSoon />
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
                    className="w-full object-contain relative z-10"
                />
            </div>
            ``
        </div>
    )
}
