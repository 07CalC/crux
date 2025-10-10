import { bitsatRoundByYearsGlobal, csabRoundByYearsGlobal, jossaRoundByYearsGlobal } from "@/constants";
import React, { useEffect } from "react";


type props = {
    requiredFilters: { [key: string]: string | number };
    setRequiredFilters: React.Dispatch<React.SetStateAction<Record<string, string | number>>>;
    filters: Array<{ [key: string]: string[] | number[] }>
    counsellingType: "JOSSA" | "CSAB" | "BITSAT";
}



export const RequiredFilters = ({ requiredFilters, setRequiredFilters, filters, counsellingType }: props) => {
    const availableRoundsAll = {
        JOSSA: jossaRoundByYearsGlobal,
        CSAB: csabRoundByYearsGlobal,
        BITSAT: bitsatRoundByYearsGlobal
    }
    const roundByYears = availableRoundsAll[counsellingType];
    useEffect(() => {
        const selectedYear = requiredFilters.year as number;
        const selectedRound = requiredFilters.round as number;

        if (selectedYear && roundByYears[selectedYear as number]) {
            const availableRounds = roundByYears[selectedYear as number];
            if (!availableRounds.includes(selectedRound)) {
                setRequiredFilters(prev => ({
                    ...prev,
                    round: availableRounds[availableRounds.length - 1]
                }))
            }
        }
    }, [requiredFilters.year, setRequiredFilters]);
    return (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {filters.map((filter, index) => (
                <div key={index}>
                    <label className="text-lg font-semibold text-black dark:text-gray-100">
                        {Object.keys(filter)[0]}
                    </label>
                    <select
                        name={Object.keys(filter)[0]}
                        value={requiredFilters[Object.keys(filter)[0]]}
                        onChange={(e) => setRequiredFilters({ ...requiredFilters, [Object.keys(filter)[0]]: e.target.value })}
                        className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
                    >
                        {Object.values(filter)[0].map((value: string | number, index: number) => (
                            <option className="bg-white dark:bg-[#1a1a1a] hover:bg-purple-500 active:bg-purple-500" key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
};
