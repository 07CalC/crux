"use client";
import { Orcr } from "@/types/globalTypes";
import { useState, useMemo, useEffect } from "react";
import { Table } from "@/components/common/Table";
import { availableBitsatYears, availableCsabYears, availableJossaYears, availableNeetPgYears, bitsatRoundByYearsGlobal, csabRoundByYearsGlobal, jossaRoundByYearsGlobal, mostRecentBitsatOrcr, mostRecentJossaOrcr, mostRecentNeetPgOrcr, neetPgRoundByYearsGlobal } from "@/constants";
import { NotFound } from "../common/NotFound";
import { Loading } from "../common/Loading";
import { PaginationNav } from "../common/PaginationNav";
import { ViewToggle } from "../common/ViewToggle";
import { MobileFilterSidebar } from "../common/MobileFilterSidebar";
import { FiFilter } from "react-icons/fi";

export const ClgOrcr = ({
  clgId,
  clgType,
}: {
  clgId: string;
  clgType?: "IIT" | "GFTI" | "BITS" | "JAC" | "NEET_PG" | "NEET_UG";
}) => {
  const [fetchedOrcr, setFetchedOrcr] = useState<Orcr[]>([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [colsShown, setColsShown] = useState(10);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [sort, setSort] = useState<{
    type: "rank";
    openRank: "asc" | "desc" | null;
    closeRank: "asc" | "desc" | null;
  } | { type: "marks"; marks: "asc" | "desc" | null }>({
    type: clgType === "BITS" ? "marks" : "rank",
    openRank: null,
    closeRank: null,
    marks: null,
  });
  const [filters, setFilters] = useState({
    searchKeyword: "",
    academicProgramName: "",
    seatType: "",
    gender: "",
    rank: clgType === "BITS" ? 390 : 0,
  });

  const counsellingType = {
    IIT: ["JOSSA"],
    GFTI: ["JOSSA", "CSAB"],
    BITS: ["BITSAT"],
    JAC: ["JAC"],
    NEET_PG: ["NEET_PG"],
    NEET_UG: ["NEET_UG"],
  };


  const [requiredFilters, setRequiredFilters] = useState<{
    [key: string]: string | number;
  }>({
    type: counsellingType[clgType!]?.[0] || "JOSSA",
    year: clgType === "BITS" 
      ? availableBitsatYears[availableBitsatYears.length - 1] 
      : clgType === "NEET_PG" 
        ? availableNeetPgYears[availableNeetPgYears.length - 1]
        : availableJossaYears[availableJossaYears.length - 1],
    round: clgType === "BITS" 
      ? mostRecentBitsatOrcr.round 
      : clgType === "NEET_PG"
        ? mostRecentNeetPgOrcr.round
        : mostRecentJossaOrcr.round,
  });

  const availableYears: Record<string, number[]> = clgType === "BITS" 
    ? { BITSAT: availableBitsatYears } 
    : clgType === "NEET_PG"
      ? { NEET_PG: availableNeetPgYears }
      : {
        JOSSA: availableJossaYears,
        CSAB: availableCsabYears,
      }
  const availableRounds: Record<string, Record<number, number[]>> = clgType === "BITS" 
    ? { BITSAT: bitsatRoundByYearsGlobal } 
    : clgType === "NEET_PG" 
      ? { NEET_PG: neetPgRoundByYearsGlobal }
      : {
        JOSSA: jossaRoundByYearsGlobal,
        CSAB: csabRoundByYearsGlobal,
      }
  const requiredFiltersOptions = useMemo(() => {
    const year = requiredFilters.year as number;
    const type = requiredFilters.type as string;
    if (clgType === "IIT") {
      return [
        { type: ["JOSSA"] },
        { year: availableJossaYears },
        { round: jossaRoundByYearsGlobal[year] },
      ];
    } else if (clgType === "GFTI") {
      return [
        { type: ["JOSSA", "CSAB"] },
        { year: availableYears[type as string] },
        { round: availableRounds[type as string][year] }
      ]
    } else if (clgType === "BITS") {
      return [
        { type: ["BITSAT"] },
        { year: availableBitsatYears },
        { round: [1] },
      ];
    } else if (clgType === "NEET_PG") {
      return [
        { type: ["NEET_PG"] },
        { year: availableNeetPgYears },
        { round: neetPgRoundByYearsGlobal[year] || [1] }
      ]
    }
    else {
      return [{ type: ["JAC"] }, { year: [2023, 2024] }, { round: [1, 2, 3] }];
    }
  }, [clgType, requiredFilters.year, requiredFilters.type]);

  const filterOptions: [
    { academicProgramName: string[] },
    { seatType: string[] },
    { gender: string[] }
  ] = useMemo(() => {
    return [
      {
        academicProgramName: [
          ...new Set(fetchedOrcr.map((orcr) => orcr.academicProgramName)),
        ],
      },
      { seatType: [...new Set(fetchedOrcr.map((orcr) => orcr.seatType))] },
      {
        gender: [...new Set(fetchedOrcr.map((orcr) => orcr.gender))],
      },
    ];
  }, [fetchedOrcr]);

  const [view, setView] = useState<
    { name: string; key: keyof Orcr; show: boolean }[]
  >([]);

  useEffect(() => {
    const baseView: { name: string; key: keyof Orcr; show: boolean }[] = [
      { name: "Year", key: "year", show: false },
      { name: "Round", key: "round", show: false },
      { name: "Type", key: "type", show: false },
      { name: "Institute", key: "institute", show: false },
      { name: "Academic Program", key: "academicProgramName", show: true },
      { name: "Gender", key: "gender", show: true },
      { name: "Quota", key: "quota", show: true },
      { name: "Seat Type", key: "seatType", show: true },
    ];

    const extraFields: { name: string; key: keyof Orcr; show: boolean }[] =
      clgType === "BITS"
        ? [{ name: "Marks", key: "marks", show: true }]
        : [
          { name: "Open Rank", key: "openRank", show: true },
          { name: "Close Rank", key: "closeRank", show: true },
        ];

    setView([...baseView, ...extraFields]);
  }, [clgType]);

  const filteredData = useMemo(() => {
    return fetchedOrcr.filter((orcr) => {
      const matchesSearch = orcr.academicProgramName
        .toLowerCase()
        .includes(filters.searchKeyword.toLowerCase());

      const matchesProgram = orcr.academicProgramName
        .toLowerCase()
        .includes(filters.academicProgramName.toLowerCase());

      const matchesSeatType =
        filters.seatType === "" || orcr.seatType === filters.seatType;

      const matchesGender = orcr.gender
        .toLowerCase()
        .includes(filters.gender.toLowerCase());

      const matchesRank = clgType === "BITS"
        ? filters.rank !== undefined &&
        orcr.marks !== undefined &&
        orcr.marks <= filters.rank
        : filters.rank !== undefined &&
        orcr.closeRank !== undefined &&
        orcr.closeRank >= filters.rank;

      return matchesSearch && matchesProgram && matchesSeatType && matchesGender && matchesRank;
    });
  }, [fetchedOrcr, filters, clgType]);

  const totalPages = Math.ceil(filteredData.length / colsShown);

  const sortedData = useMemo(() => {
    if (sort.type === "marks") {
      return [...filteredData].sort((a, b) => {
        if (a.marks === undefined || b.marks === undefined) return 0;
        return sort.marks === "asc" ? a.marks - b.marks : b.marks - a.marks;
      });
    } else {
      return [...filteredData].sort((a, b) => {
        const openRankA = a.openRank ?? Infinity;
        const openRankB = b.openRank ?? Infinity;
        const closeRankA = a.closeRank ?? Infinity;
        const closeRankB = b.closeRank ?? Infinity;

        if (sort.openRank !== null) {
          return sort.openRank === "asc"
            ? openRankA - openRankB
            : openRankB - openRankA;
        } else if (sort.closeRank !== null) {
          return sort.closeRank === "asc"
            ? closeRankA - closeRankB
            : closeRankB - closeRankA;
        }
        return 0;
      });
    }
  }, [filteredData, sort]);

  const paginatedData: Orcr[] = useMemo(() => {
    return sortedData.slice((currPage - 1) * colsShown, currPage * colsShown);
  }, [sortedData, currPage, colsShown, sort]);

  const fetchOrcr = async () => {
    setLoading(true);
    const res = await fetch("/api/v1/getClgOrcr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        year: requiredFilters.year,
        round: requiredFilters.round,
        type: requiredFilters.type,
        clgId: clgId,
      }),
    });
    const data = await res.json();
    setFetchedOrcr(data);
    setLoading(false);
    setFilters({
      searchKeyword: "",
      academicProgramName: "",
      seatType: "",
      gender: "",
      rank: clgType === "BITS" ? 390 : 0,
    });
  };

  useEffect(() => {
    fetchOrcr();
  }, [requiredFilters]);

  const handleRequiredFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    let newType = requiredFilters.type;
    let newYear = Number(requiredFilters.year);
    let newRound = Number(requiredFilters.round);

    if (name === "type") {
      newType = value;

      const validYearsForType = availableYears[newType];
      if (!validYearsForType.includes(newYear)) {
        newYear = validYearsForType[validYearsForType.length - 1];
      }

      const validRounds = availableRounds[newType]?.[newYear] || [];
      if (!validRounds.includes(newRound)) {
        newRound = validRounds[validRounds.length - 1];
      }
    }

    if (name === "year") {
      newYear = Number(value);

      const validRounds = availableRounds[newType]?.[newYear] || [];
      if (!validRounds.includes(newRound)) {
        newRound = validRounds[validRounds.length - 1];
      }
    }

    if (name === "round") {
      newRound = Number(value);
    }

    setRequiredFilters({
      ...requiredFilters,
      type: newType,
      year: newYear,
      round: newRound,
    });
  };

  if (!loading && fetchedOrcr.length === 0)
    return (
      <div className="card p-12 text-center">
        <NotFound text="No cutoff data available for this college" />
      </div>
    );

  return (
    <section className="overflow-x-hidden">
      <div className="max-w-[100vw]">
        {/* Mobile Filter Button */}
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="lg:hidden btn-primary mb-4 w-full sm:w-auto"
        >
          <FiFilter className="w-5 h-5" />
          <span>Filters</span>
        </button>

        {/* Mobile Filter Sidebar */}
        <MobileFilterSidebar 
          isOpen={isMobileFilterOpen} 
          onClose={() => setIsMobileFilterOpen(false)}
        >
          {/* Required Filters */}
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-base font-bold">Required Filters</h3>
            </div>
            
            <div className="space-y-4">
              {requiredFiltersOptions.map((option, index) => {
                const key = Object.keys(option)[0];
                return (
                  <div key={index}>
                    <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </label>
                    <select
                      name={key}
                      value={requiredFilters[key]}
                      onChange={handleRequiredFilterChange}
                      className="input w-full"
                    >
                      {(option[key as keyof typeof option] as (string | number)[]).map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </select>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Optional Filters */}
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
              </div>
              <h3 className="text-base font-bold">Additional Filters</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                  Program
                </label>
                <select
                  name="academicProgramName"
                  value={filters.academicProgramName}
                  onChange={(e) =>
                    setFilters({ ...filters, academicProgramName: e.target.value })
                  }
                  className="input w-full"
                >
                  <option value="">All Programs</option>
                  {filterOptions[0].academicProgramName.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                  Seat Type
                </label>
                <select
                  name="seatType"
                  value={filters.seatType}
                  onChange={(e) =>
                    setFilters({ ...filters, seatType: e.target.value })
                  }
                  className="input w-full"
                >
                  <option value="">All Seat Types</option>
                  {filterOptions[1].seatType.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                  Gender
                </label>
                <select
                  name="gender"
                  value={filters.gender}
                  onChange={(e) =>
                    setFilters({ ...filters, gender: e.target.value })
                  }
                  className="input w-full"
                >
                  <option value="">All Genders</option>
                  {filterOptions[2].gender.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                  {clgType === "BITS" ? "Max Marks" : "Min Rank"}
                </label>
                <input
                  type="number"
                  name="rank"
                  value={filters.rank || ""}
                  onChange={(e) =>
                    setFilters({ ...filters, rank: parseInt(e.target.value) || 0 })
                  }
                  placeholder={clgType === "BITS" ? "Enter marks" : "Enter rank"}
                  className="input w-full"
                />
              </div>

              <button
                onClick={() => {
                  setFilters({
                    searchKeyword: "",
                    academicProgramName: "",
                    seatType: "",
                    gender: "",
                    rank: 0,
                  });
                }}
                className="btn-outline w-full"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        </MobileFilterSidebar>

        <div className="grid lg:grid-cols-[380px,1fr] gap-6">
          {/* Left Sidebar - Scrollable Filters (Desktop Only) */}
          <div className="hidden lg:block space-y-6">
            {/* Required Filters */}
            <div className="card p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-base font-bold">Required Filters</h3>
              </div>
              
              <div className="space-y-4">
                {requiredFiltersOptions.map((option, index) => {
                  const key = Object.keys(option)[0];
                  return (
                    <div key={index}>
                      <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <select
                        name={key}
                        value={requiredFilters[key]}
                        onChange={handleRequiredFilterChange}
                        className="input w-full"
                      >
                        {(option[key as keyof typeof option] as (string | number)[]).map((value, index) => (
                          <option key={index} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Optional Filters */}
            <div className="card p-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold">Additional Filters</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                    Program
                  </label>
                  <select
                    name="academicProgramName"
                    value={filters.academicProgramName}
                    onChange={(e) =>
                      setFilters({ ...filters, academicProgramName: e.target.value })
                    }
                    className="input w-full"
                  >
                    <option value="">All Programs</option>
                    {filterOptions[0].academicProgramName.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                    Seat Type
                  </label>
                  <select
                    name="seatType"
                    value={filters.seatType}
                    onChange={(e) =>
                      setFilters({ ...filters, seatType: e.target.value })
                    }
                    className="input w-full"
                  >
                    <option value="">All Seat Types</option>
                    {filterOptions[1].seatType.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={filters.gender}
                    onChange={(e) =>
                      setFilters({ ...filters, gender: e.target.value })
                    }
                    className="input w-full"
                  >
                    <option value="">All Genders</option>
                    {filterOptions[2].gender.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-muted-foreground mb-2 block">
                    {clgType === "BITS" ? "Max Marks" : "Min Rank"}
                  </label>
                  <input
                    type="number"
                    name="rank"
                    value={filters.rank || ""}
                    onChange={(e) =>
                      setFilters({ ...filters, rank: parseInt(e.target.value) || 0 })
                    }
                    placeholder={clgType === "BITS" ? "Enter marks" : "Enter rank"}
                    className="input w-full"
                  />
                </div>

                <button
                  onClick={() => {
                    setFilters({
                      searchKeyword: "",
                      academicProgramName: "",
                      seatType: "",
                      gender: "",
                      rank: 0,
                    });
                  }}
                  className="btn-outline w-full"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Scrollable Data Area */}
          <div className="space-y-6 min-w-0">
            {/* Search and View Controls */}
            <div className="card p-4">
              <div className="flex flex-col gap-4">
                {/* Search Input */}
                <div className="flex-1 relative min-w-0 w-full">
                  <input
                    type="text"
                    value={filters.searchKeyword}
                    onChange={(e) =>
                      setFilters({ ...filters, searchKeyword: e.target.value })
                    }
                    placeholder="Search by program name..."
                    className="input pl-4 pr-4 w-full"
                  />
                </div>

                {/* View Toggle */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Results Count */}
                    {!loading && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-bold text-foreground">{paginatedData.length}</span> of{" "}
                        <span className="font-bold text-foreground">{filteredData.length}</span> results
                      </p>
                    )}
                  </div>
                  <ViewToggle view={view} setView={setView} />
                </div>
              </div>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="card p-12">
                <Loading />
              </div>
            )}

            {/* Data Table */}
            {!loading && paginatedData.length > 0 && (
              <div className="space-y-6">
                <Table orcr={paginatedData} view={view} sort={sort} setSort={setSort} />
                
                {/* Pagination */}
                <div className="card p-4">
                  <PaginationNav
                    currPage={currPage}
                    setCurrPage={setCurrPage}
                    totalPages={totalPages}
                    colsShown={colsShown}
                    setColsShown={setColsShown}
                  />
                </div>
              </div>
            )}

            {/* Empty State */}
            {!loading && paginatedData.length === 0 && fetchedOrcr.length > 0 && (
              <div className="card p-12 text-center">
                <NotFound text="No results match your filters" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
