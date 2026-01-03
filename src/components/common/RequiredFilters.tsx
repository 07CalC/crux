import { bitsatRoundByYearsGlobal, csabRoundByYearsGlobal, jossaRoundByYearsGlobal, neetPgRoundByYearsGlobal } from "@/constants";
import React, { useEffect } from "react";
import { FiCalendar, FiLayers } from "react-icons/fi";

type props = {
    requiredFilters: { [key: string]: string | number };
    setRequiredFilters: React.Dispatch<React.SetStateAction<Record<string, string | number>>>;
    filters: Array<{ [key: string]: string[] | number[] }>
    counsellingType: "JOSSA" | "CSAB" | "BITSAT" | "NEET_PG";
}

export const RequiredFilters = ({ requiredFilters, setRequiredFilters, filters, counsellingType }: props) => {
    const availableRoundsAll = {
        JOSSA: jossaRoundByYearsGlobal,
        CSAB: csabRoundByYearsGlobal,
        BITSAT: bitsatRoundByYearsGlobal,
        NEET_PG: neetPgRoundByYearsGlobal
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

    const getIcon = (key: string) => {
        if (key.toLowerCase().includes('year')) return <FiCalendar className="w-4 h-4" />;
        if (key.toLowerCase().includes('round')) return <FiLayers className="w-4 h-4" />;
        return null;
    };

    const formatLabel = (key: string) => {
        return key.charAt(0).toUpperCase() + key.slice(1);
    };

    return (
        <div className="card p-6 mb-8">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <FiLayers className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold">Select Dataset</h3>
            </div>
            
            <div className="space-y-4">
                {filters.map((filter, index) => {
                    const key = Object.keys(filter)[0];
                    const icon = getIcon(key);
                    
                    return (
                        <div key={index} className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                                {icon}
                                <span>{formatLabel(key)}</span>
                            </label>
                            <select
                                name={key}
                                value={requiredFilters[key]}
                                onChange={(e) => setRequiredFilters({ ...requiredFilters, [key]: e.target.value })}
                                className="input cursor-pointer w-full"
                                title={String(requiredFilters[key])}
                            >
                                {Object.values(filter)[0].map((value: string | number, index: number) => (
                                    <option key={index} value={value} title={String(value)}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
