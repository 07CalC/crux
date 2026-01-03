import { FiFilter, FiX } from "react-icons/fi";
import { SearchableSelect } from "./SearchableSelect";

type filters = {
  searchKeyword: string;
  institute: string;
  academicProgramName: string;
  gender: string;
  quota: string;
  seatType: string;
  minRank: number;
  maxRank: number;
};

type props = {
  filters: filters;
  filterOptions: [
    { institute: string[] },
    { academicProgramName: string[] },
    { quota: string[] },
    { seatType: string[] },
    { gender: string[] }
  ];
  setFilters: React.Dispatch<React.SetStateAction<filters>>;
};

export default function Filters({ filters, setFilters, filterOptions }: props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatLabel = (key: string) => {
    const labelMap: Record<string, string> = {
      institute: "Institute",
      academicProgramName: "Academic Program",
      quota: "Quota",
      seatType: "Seat Type",
      gender: "Gender",
    };
    return labelMap[key] || key;
  };

  const hasActiveFilters = 
    filters.institute || 
    filters.academicProgramName || 
    filters.quota || 
    filters.seatType || 
    filters.gender || 
    filters.minRank > 0 || 
    filters.maxRank > 0;

  return (
    <div className="card p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
            <FiFilter className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold">Filters</h3>
          {hasActiveFilters && (
            <span className="badge-accent text-xs">Active</span>
          )}
        </div>
        {hasActiveFilters && (
          <button
            className="btn-ghost p-2 group"
            onClick={() =>
              setFilters({
                searchKeyword: "",
                institute: "",
                academicProgramName: "",
                quota: "",
                seatType: "",
                gender: "",
                minRank: 0,
                maxRank: 0,
              })
            }
          >
            <FiX className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            <span className="text-sm">Clear All</span>
          </button>
        )}
      </div>

      {/* Rank Range */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Rank Range
        </h4>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Minimum Rank</label>
            <input
              className="input"
              type="number"
              name="minRank"
              value={filters.minRank || ""}
              onChange={handleChange}
              placeholder="e.g., 1"
              min="0"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Maximum Rank</label>
            <input
              className="input"
              type="number"
              name="maxRank"
              value={filters.maxRank || ""}
              onChange={handleChange}
              placeholder="e.g., 10000"
              min="0"
            />
          </div>
        </div>
      </div>

      {/* Filter Dropdowns */}
      <div className="space-y-4 pt-4 border-t border-border">
        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          Additional Filters
        </h4>
        <div className="space-y-4">
          {filterOptions.map((filter, index) => {
            const key = Object.keys(filter)[0] as keyof typeof filters;
            const useSearchable = key === 'institute' || key === 'academicProgramName';
            
            return (
              <div key={index} className="space-y-2">
                <label className="text-sm font-medium">
                  {formatLabel(key)}
                </label>
                {useSearchable ? (
                  <SearchableSelect
                    value={filters[key] || ""}
                    onChange={(value) => handleChange({ target: { name: key, value } } as any)}
                    options={(filter as Record<typeof key, string[]>)[key]}
                    placeholder={`Select ${formatLabel(key)}`}
                    emptyLabel="All"
                    allowEmpty={true}
                  />
                ) : (
                  <select
                    name={key}
                    value={filters[key] || ""}
                    onChange={handleChange}
                    className="input cursor-pointer w-full"
                    title={filters[key] as string || "All"}
                  >
                    <option value="">All</option>
                    {(filter as Record<typeof key, string[]>)[key].map(
                      (option, idx) => (
                        <option key={idx} value={option} title={option}>
                          {option}
                        </option>
                      )
                    )}
                  </select>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
