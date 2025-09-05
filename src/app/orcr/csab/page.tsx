'use client';
import Filters from "@/app/components/Filters";
import { Loading } from "@/app/components/Loading";
import { NotFound } from "@/app/components/NotFound";
import { PaginationNav } from "@/app/components/PaginationNav";
import { RequiredFilters } from "@/app/components/RequiredFilters";
import { ViewToggle } from "@/app/components/ViewToggle";
import { Orcr } from "@/types/globalTypes";
import { useEffect, useMemo, useState } from "react";
import { Table } from "@/app/components/Table";
import { availableCsabYears, csabRoundByYearsGlobal, mostRecentCsabOrcr } from "@/constants";
import { useQuery } from "@tanstack/react-query";

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
  const [filters, setFilters] = useState({
    searchKeyword: "",
    institute: "",
    academicProgramName: "",
    quota: "",
    seatType: "",
    gender: "",
    rank: 0,
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
        orcr.closeRank && orcr.closeRank >= filters.rank
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
    <div className="flex flex-col items-center w-full p-4 gap-y-6 h-full">
      <RequiredFilters
        requiredFilters={requiredFilters}
        setRequiredFilters={setRequiredFilters}
        filters={requiredFiltersOptions}
        counsellingType="CSAB"
      />
      <div className="w-full max-w-screen sm:px-4 flex justify-between gap-x-3 sm:gap-x-8 items-center">
        <Filters
          filters={filters}
          filterOptions={filterOptions}
          setFilters={setFilters}
        />
        <input
          type="text"
          value={filters.searchKeyword}
          onChange={e => setFilters({ ...filters, searchKeyword: e.target.value })}
          placeholder="Search by Institute"
          className="p-2 bg-white border-2 dark:bg-[#1a1a1a] rounded-lg shadow-[4px_4px_0px_0px] shadow-black dark:shadow-white focus:shadow-[0px_0px_0px_0px] focus:translate-y-1 focus:translate-x-1 focus:duration-100 transition-all ease-in-out text-black dark:text-white border-black dark:border-gray-100 w-full"
        />
        <ViewToggle view={view} setView={setView} />
      </div>
      {isLoading && <Loading />}
      {error && <NotFound text={(error as Error).message || "Error loading data"} />}
      {!isLoading && !error && paginatedData.length !== 0 && (
        <>
          <Table orcr={paginatedData} view={view} sort={sort} setSort={setSort} />
          <div className="flex justify-center sm:justify-end items-center space-x-4 w-full">
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
      {!isLoading && !error && paginatedData.length === 0 && <NotFound text="No data found" />}
    </div>
  );
}
