

type props = {
    requiredFilters: { [key: string]: string | number };
    setRequiredFilters: React.Dispatch<{ [key: string]: string | number }>;
}



export const RequiredFilters = ({ requiredFilters, setRequiredFilters }: props) => {
    const filters = [
        {exam: ["ADVANCED", "MAINS"]},
        {year: [2023]},
        {type: requiredFilters.exam === "MAINS" ? ["JOSSA", "CSAB"] : ["JOSSA"]},
        {round: requiredFilters.type === "JOSSA" ? [1, 2, 3, 4, 5, 6] : [1, 2]},
    ]
    return (
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
            {filters.map((filter, index) => (
                <div key={index}>
                    <select
                        name={Object.keys(filter)[0]}
                        value={requiredFilters[Object.keys(filter)[0]]}
                        onChange={(e) => setRequiredFilters({ ...requiredFilters, [Object.keys(filter)[0]]: e.target.value })}
                        className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
                    >
                        {Object.values(filter)[0].map((value: string | number, index: number) => (
                            <option className="bg-gray-300 dark:bg-[#282828] hover:bg-purple-500 active:bg-purple-500" key={index} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );  
  };