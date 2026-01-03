import { useState, useCallback } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  initialValue?: string;
  debounceMs?: number;
  className?: string;
}

export const SearchBar = ({
  placeholder = "Search...",
  onSearch,
  initialValue = "",
  debounceMs = 300,
  className = "",
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialValue);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(null);

  const handleChange = useCallback((value: string) => {
    setQuery(value);

    // Clear existing timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set new timer
    const timer = setTimeout(() => {
      onSearch(value);
    }, debounceMs);

    setDebounceTimer(timer);
  }, [debounceTimer, debounceMs, onSearch]);

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative flex items-center">
        <FaSearch 
          className="absolute left-4 text-gray-500 dark:text-gray-400 text-lg pointer-events-none" 
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-12 py-3 md:py-4 text-base md:text-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-white border-2 border-black dark:border-white rounded-xl shadow-[4px_4px_0px_0px] hover:shadow-[6px_6px_0px_0px] focus:shadow-[6px_6px_0px_0px] shadow-black dark:shadow-white transition-all duration-200 placeholder:text-gray-500 dark:placeholder:text-gray-400"
          aria-label={placeholder}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-1"
            aria-label="Clear search"
            type="button"
          >
            <FaTimes className="text-lg" />
          </button>
        )}
      </div>
    </div>
  );
};

interface AdvancedSearchBarProps extends SearchBarProps {
  filters?: Array<{
    id: string;
    label: string;
    options: Array<{ value: string; label: string }>;
  }>;
  activeFilters?: Record<string, string>;
  onFilterChange?: (filterId: string, value: string) => void;
}

export const AdvancedSearchBar = ({
  placeholder = "Search colleges...",
  onSearch,
  initialValue = "",
  filters,
  activeFilters = {},
  onFilterChange,
  className = "",
}: AdvancedSearchBarProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <SearchBar
        placeholder={placeholder}
        onSearch={onSearch}
        initialValue={initialValue}
      />
      
      {filters && filters.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <select
              key={filter.id}
              value={activeFilters[filter.id] || ""}
              onChange={(e) => onFilterChange?.(filter.id, e.target.value)}
              className="px-4 py-2 text-sm md:text-base bg-white dark:bg-[#1a1a1a] text-black dark:text-white border-2 border-black dark:border-white rounded-lg shadow-[3px_3px_0px_0px] hover:shadow-[4px_4px_0px_0px] shadow-black dark:shadow-white transition-all"
              aria-label={filter.label}
            >
              <option value="">{filter.label}</option>
              {filter.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
          
          {Object.keys(activeFilters).length > 0 && (
            <button
              onClick={() => {
                Object.keys(activeFilters).forEach((key) => {
                  onFilterChange?.(key, "");
                });
              }}
              className="px-4 py-2 text-sm md:text-base text-red-700 dark:text-red-400 border-2 border-red-500 dark:border-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors font-medium"
              aria-label="Clear all filters"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};
