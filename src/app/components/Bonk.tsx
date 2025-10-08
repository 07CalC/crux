"use client"
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GiSpikedBat } from "react-icons/gi";
import { toast } from "react-toastify";



export const Bonk = ({ clgId, bonksCount }: { clgId: string, bonksCount: number }) => {
    const [isBonked, setIsBonked] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        return localStorage.getItem(`bonk-${clgId}`) ? true : false
    })
    const [bonks, setBonks] = useState<number>(bonksCount)
    const handleBonk = async () => {
        if (isBonked) {
            localStorage.removeItem(`bonk-${clgId}`);
            setIsBonked(false);
            setBonks((prev) => prev - 1);
            const res = await fetch("/api/v1/bonk/remove", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clgId,
                }),
            });
            if (!res.ok) {
                toast.error("Failed to unbonk. Please try again.");
            }
            toast.success("Unbonked successfully!");
        } else {
            localStorage.setItem(`bonk-${clgId}`, "true");
            setIsBonked(true);
            setBonks((prev) => prev + 1);
            const res = await fetch("/api/v1/bonk/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clgId,
                }),
            });
            if (!res.ok) {
                toast.error("Failed to bonk. Please try again.");
            }
            toast.success("Bonked successfully!");
        }
    }
    return (
        <div className="flex gap-x-5 items-center">
            <button onClick={handleBonk} className={`${isBonked ? "bg-purple-500" : ""} rounded-xl px-2 sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white  shadow-black p-1`}>
                <GiSpikedBat className={`text-4xl ${isBonked ? "text-black dark:text-white" : "text-purple-500"}`} />
                {/* <span className="ml-2">{isBonked ? "Unbonk" : "Bonk"}</span> */}
                <span className="ml-2">{bonks}</span>
            </button>
            <FaArrowLeft className="text-purple-500 text-4xl" />
            <p className="text-4xl text-black dark:text-white">{isBonked ? "Unbonk" : "Bonk"}</p>
        </div>

    )
}
