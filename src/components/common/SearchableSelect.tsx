'use client';
import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiSearch, FiX } from "react-icons/fi";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

type SearchableSelectProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  options: (string | number)[];
  placeholder?: string;
  label?: string;
  className?: string;
  allowEmpty?: boolean;
  emptyLabel?: string;
};

export const SearchableSelect = ({
  value,
  onChange,
  options,
  placeholder = "Select...",
  label,
  className = "",
  allowEmpty = true,
  emptyLabel = "All"
}: SearchableSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter options based on search query
  const filteredOptions = options.filter((option) =>
    String(option).toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleSelect = (option: string | number | null) => {
    onChange(option === null ? "" : option);
    setIsOpen(false);
    setSearchQuery("");
  };

  const getDisplayValue = () => {
    if (!value || value === "") return placeholder;
    return String(value);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="input w-full flex items-center justify-between cursor-pointer hover:border-primary/50 transition-colors"
      >
        <span className={`truncate ${!value || value === "" ? "text-muted-foreground" : ""}`}>
          {getDisplayValue()}
        </span>
        <FiChevronDown
          className={`w-4 h-4 flex-shrink-0 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute z-50 mt-2 w-full overflow-hidden"
          >
            <div className="card shadow-xl max-h-[320px] flex flex-col">
              {/* Search Input */}
              <div className="p-3 border-b border-border bg-card">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="input pl-9 pr-8 py-2 text-sm w-full"
                    onClick={(e) => e.stopPropagation()}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded transition-colors"
                    >
                      <FiX className="w-4 h-4 text-muted-foreground" />
                    </button>
                  )}
                </div>
              </div>

              {/* Options List */}
              <div className="overflow-y-auto p-2 max-h-[260px]">
                {allowEmpty && (
                  <button
                    type="button"
                    onClick={() => handleSelect(null)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !value || value === ""
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    {emptyLabel}
                  </button>
                )}

                {filteredOptions.length > 0 ? (
                  filteredOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSelect(option)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors break-words ${
                        String(value) === String(option)
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-muted/50"
                      }`}
                      title={String(option)}
                    >
                      {String(option)}
                    </button>
                  ))
                ) : (
                  <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
