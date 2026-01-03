'use client';
import Filters from "@/components/common/Filters";
import { Loading } from "@/components/common/Loading";
import { NotFound } from "@/components/common/NotFound";
import { PaginationNav } from "@/components/common/PaginationNav";
import { RequiredFilters } from "@/components/common/RequiredFilters";
import { ViewToggle } from "@/components/common/ViewToggle";
import { MobileFilterSidebar } from "@/components/common/MobileFilterSidebar";
import { Orcr } from "@/types/globalTypes";
import { useEffect, useMemo, useState } from "react";
import { Table } from "@/components/common/Table";
import { availableCsabYears, csabRoundByYearsGlobal, mostRecentCsabOrcr } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { FiFilter } from "react-icons/fi";

const fetchOrcrData = async (requiredFilters: Record<string, string | number>) => {
  const res = await fetch("/api/v1/getOrcr", {
    method: "POST",
    body: JSON.stringify({
      exam: "MAINS",
      year: requiredFilters.year,
      round: requiredFilters.round,
      type: "CSAB",
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json() as Promise<Orcr[]>;
};

export default function Csab() {
  const [currPage, setCurrPage] = useState<number>(1);
  const [colsShown, setColsShown] = useState<number>(10);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState({
    searchKeyword: "",
    institute: "",
    academicProgramName: "",
    quota: "",
    seatType: "",
    gender: "",
    minRank: 0,
    maxRank: 0,
  });
  const [sort, setSort] = useState<
    { type: "rank"; openRank: "asc" | "desc" | null; closeRank: "asc" | "desc" | null } |
    { type: "marks"; marks: "asc" | "desc" | null }
  >({
    type: "rank",
    openRank: null,
    closeRank: null,
  });
  const [requiredFilters, setRequiredFilters] = useState<Record<string, string | number>>({
    year: mostRecentCsabOrcr.year,
    round: mostRecentCsabOrcr.round,
  });

  const roundByYears: Record<number, number[]> = csabRoundByYearsGlobal;
  const requiredFiltersOptions: [{ year: number[] }, { round: number[] }] = useMemo(() => [
    { year: availableCsabYears },
    { round: roundByYears[requiredFilters.year as number] || [] }
  ], [requiredFilters, roundByYears]);

  const [view, setView] = useState<{ name: string; key: keyof Orcr; show: boolean }[]>([
    { name: "Year", key: "year", show: false },
    { name: "Round", key: "round", show: false },
    { name: "Type", key: "type", show: false },
    { name: "Institute", key: "institute", show: true },
    { name: "Academic Program", key: "academicProgramName", show: true },
    { name: "Gender", key: "gender", show: true },
    { name: "Quota", key: "quota", show: true },
    { name: "Seat Type", key: "seatType", show: true },
    { name: "Open Rank", key: "openRank", show: true },
    { name: "Close Rank", key: "closeRank", show: true },
  ]);

  const { data: fetchedOrcrData, isLoading, error } = useQuery({
    queryKey: ['csabOrcrData', requiredFilters],
    queryFn: () => fetchOrcrData(requiredFilters),
    staleTime: 1000 * 60 * 5,
    enabled: !!requiredFilters.year && !!requiredFilters.round,
  });

  const filteredData = useMemo(() => {
    if (!fetchedOrcrData) return [];
    return fetchedOrcrData.filter(
      (orcr) =>
        orcr.institute?.toLowerCase().includes(filters.searchKeyword.toLowerCase()) &&
        orcr.academicProgramName?.toLowerCase().includes(filters.academicProgramName.toLowerCase()) &&
        orcr.quota?.toLowerCase().includes(filters.quota.toLowerCase()) &&
        (filters.seatType === "" || orcr.seatType === filters.seatType) &&
        orcr.institute?.toLowerCase().includes(filters.institute.toLowerCase()) &&
        orcr.gender?.toLowerCase().includes(filters.gender.toLowerCase()) &&
        (filters.minRank === 0 || (orcr.closeRank && orcr.closeRank >= filters.minRank)) &&
        (filters.maxRank === 0 || (orcr.closeRank && orcr.closeRank <= filters.maxRank))
    );
  }, [fetchedOrcrData, filters]);

  const totalPages = Math.max(1, Math.ceil(filteredData.length / colsShown));

  const filterOptions: [
    { institute: string[] },
    { academicProgramName: string[] },
    { quota: string[] },
    { seatType: string[] },
    { gender: string[] }
  ] = useMemo(() => {
    if (!fetchedOrcrData) return [
      { institute: [] },
      { academicProgramName: [] },
      { quota: [] },
      { seatType: [] },
      { gender: [] },
    ];
    return [
      { institute: [...new Set(fetchedOrcrData.map(orcr => orcr.institute))] },
      { academicProgramName: [...new Set(fetchedOrcrData.map(orcr => orcr.academicProgramName))] },
      { quota: [...new Set(fetchedOrcrData.map(orcr => orcr.quota))] },
      { seatType: [...new Set(fetchedOrcrData.map(orcr => orcr.seatType))] },
      { gender: [...new Set(fetchedOrcrData.map(orcr => orcr.gender))] },
    ];
  }, [fetchedOrcrData]);

  const sortedData = useMemo(() => {
    if (!filteredData) return [];
    return [...filteredData].sort((a, b) => {
      if (sort.type === 'rank' && sort.openRank) {
        return sort.openRank === 'asc'
          ? (a.openRank ?? 0) - (b.openRank ?? 0)
          : (b.openRank ?? 0) - (a.openRank ?? 0);
      } else if (sort.type === 'rank' && sort.closeRank) {
        return sort.closeRank === 'asc'
          ? (a.closeRank ?? 0) - (b.closeRank ?? 0)
          : (b.closeRank ?? 0) - (a.closeRank ?? 0);
      }
      return 0;
    });
  }, [filteredData, sort]);

  const paginatedData = useMemo(() => {
    if (!sortedData) return [];
    return sortedData.slice((currPage - 1) * colsShown, currPage * colsShown);
  }, [sortedData, currPage, colsShown]);

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 10);
  }, [currPage, colsShown]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5 overflow-x-hidden">
      <div className="w-full px-4 md:px-6 lg:px-8 py-6 max-w-[100vw]">
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
          <RequiredFilters
            requiredFilters={requiredFilters}
            setRequiredFilters={setRequiredFilters}
            filters={requiredFiltersOptions}
            counsellingType="CSAB"
          />
          <Filters
            filters={filters}
            filterOptions={filterOptions}
            setFilters={setFilters}
          />
        </MobileFilterSidebar>

        <div className="grid lg:grid-cols-[420px,1fr] gap-6 lg:h-[calc(100vh-8rem)]">
          {/* Left Sidebar - Scrollable Filters (Desktop Only) */}
          <div className="hidden lg:block space-y-6 overflow-y-auto pr-2 h-full pb-6">
            {/* Required Filters */}
            <RequiredFilters
              requiredFilters={requiredFilters}
              setRequiredFilters={setRequiredFilters}
              filters={requiredFiltersOptions}
              counsellingType="CSAB"
            />

            {/* Filters */}
            <Filters
              filters={filters}
              filterOptions={filterOptions}
              setFilters={setFilters}
            />
          </div>

          {/* Right Content - Scrollable Data Area */}
          <div className="space-y-6 lg:overflow-y-auto lg:h-full pb-6 min-w-0">
            {/* Search and View Controls */}
            <div className="card p-4 lg:sticky lg:top-0 lg:z-10 lg:bg-card/95 lg:backdrop-blur-sm">
              <div className="flex flex-col gap-4">
                {/* Search Input */}
                <div className="flex-1 relative min-w-0 w-full">
                  <input
                    type="text"
                    value={filters.searchKeyword}
                    onChange={(e) =>
                      setFilters({ ...filters, searchKeyword: e.target.value })
                    }
                    placeholder="Search by institute name..."
                    className="input pl-4 pr-4 w-full"
                  />
                </div>

                {/* View Toggle */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Results Count */}
                    {!isLoading && !error && (
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
            {isLoading && (
              <div className="card p-12">
                <Loading />
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="card p-12">
                <NotFound text={error.message || "Error loading data"} />
              </div>
            )}

            {/* Data Table */}
            {!isLoading && !error && paginatedData.length !== 0 && (
              <>
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
              </>
            )}

            {/* Empty State */}
            {!isLoading && !error && paginatedData.length === 0 && (
              <div className="card p-12">
                <NotFound text="No data found matching your filters" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
