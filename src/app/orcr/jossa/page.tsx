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




export default function Jossa() {
    const [fetchedOrcrData, setFetchedOrcrData] = useState<Orcr[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
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
    const [requiredFilters, setRequiredFilters] = useState<{
        [key: string]: string | number;
    }>({
        exam: "ADVANCED",
        year: 2024,
        round: 5,
    });
    const requiredFiltersOptions: [{exam: string[]}, { year: number[] }, { round: number[] }] = useMemo(() =>[
        {exam: ["ADVANCED", "MAINS"]}, {year: [2023, 2024]}, {round: requiredFilters.year === 2023 ? [1, 2, 3, 4, 5, 6] : [1, 2, 3, 4, 5]}
    ],[requiredFilters.year])
    const [view, setView] = useState<
    { name: string; key: keyof Orcr; show: boolean }[]
  >([
    { name: "Year", key: "year", show: false },
    { name: "Round", key: "round", show: false },
    { name: "Type", key: "type", show: false },
    { name: "Institute", key: "institute", show: true },
    { name: "Academic Program", key: "academicProgramName", show: true },
    { name: "Gender", key: "gender", show: true },
    { name: "Quota", key: "quota", show: false },
    { name: "Seat Type", key: "seatType", show: true },
    { name: "Open Rank", key: "openRank", show: true },
    { name: "Close Rank", key: "closeRank", show: true },
  ]);
  const fetchOrcrData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/v1/getOrcr", {
        method: "POST",
        body: JSON.stringify({
          exam: requiredFilters.exam,
          year: requiredFilters.year,
          round: requiredFilters.round,
          type: "JOSSA",
        }),
      });
      const data = await res.json();
      setFetchedOrcrData(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const filteredData = useMemo(() => {
      return fetchedOrcrData.filter(
        (orcr) =>
          orcr.institute
            .toLowerCase()
            .includes(filters.searchKeyword.toLowerCase()) &&
          orcr.academicProgramName
            .toLowerCase()
            .includes(filters.academicProgramName.toLowerCase()) &&
          orcr.quota.toLowerCase().includes(filters.quota.toLowerCase()) &&
          orcr.seatType.toLowerCase().includes(filters.seatType.toLowerCase()) &&
          orcr.institute
            .toLowerCase()
            .includes(filters.institute.toLowerCase()) &&
          orcr.gender.toLowerCase().includes(filters.gender.toLowerCase()) &&
          orcr.closeRank >= filters.rank
      );
    }, [fetchedOrcrData, filters]);

    const totalPages = Math.ceil(filteredData.length / colsShown);

    const filterOptions: [
        { institute: string[] },
        { academicProgramName: string[] },
        { quota: string[] },
        { seatType: string[] },
        { gender: string[] }
      ] = useMemo(() => {
        return [
          {
            institute: [
              ...new Set(fetchedOrcrData.map((orcr: Orcr) => orcr.institute)),
            ],
          },
          {
            academicProgramName: [
              ...new Set(
                fetchedOrcrData.map((orcr: Orcr) => orcr.academicProgramName)
              ),
            ],
          },
          { quota: [...new Set(fetchedOrcrData.map((orcr: Orcr) => orcr.quota))] },
          {
            seatType: [...new Set(fetchedOrcrData.map((orcr: Orcr) => orcr.seatType))],
          },
          { gender: [...new Set(fetchedOrcrData.map((orcr: Orcr) => orcr.gender))] },
        ];
      }, [fetchOrcrData]);

      const paginatedData: Orcr[] = useMemo(() => {
        return filteredData.slice((currPage - 1) * colsShown, currPage * colsShown);
      }, [filteredData, currPage, colsShown]);

      useEffect(() => {
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 10);
        }, [currPage, colsShown]);
      
        useEffect(() => {
          fetchOrcrData();
        }, [requiredFilters]);
        return (
            <div className="flex flex-col items-center w-full p-4 gap-y-6 h-full">
                  <RequiredFilters
                    requiredFilters={requiredFilters}
                    setRequiredFilters={setRequiredFilters}
                    filters={requiredFiltersOptions}
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
                      onChange={(e) =>
                        setFilters({ ...filters, searchKeyword: e.target.value })
                      }
                      placeholder="Search by Institute"
                      className="p-2 bg-gray-300 border-2 dark:bg-[#222222] rounded-lg shadow-[4px_4px_0px_0px] shadow-black dark:shadow-white focus:shadow-[0px_0px_0px_0px] focus:translate-y-1 focus:translate-x-1 focus:duration-100 transition-all ease-in-out text-black dark:text-white border-black dark:border-gray-100 w-full"
                    />
                    <ViewToggle view={view} setView={setView} />
                  </div>
                  {loading && <Loading />}
                  {!loading && paginatedData.length !== 0 && (
                    <>
                      <Table orcr={paginatedData} view={view} />
                      <div className="flex justify-center sm:justify-end items-center space-x-4 w-full ">
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
                  {!loading && paginatedData.length === 0 && <NotFound text="No data found"/>}
                </div>
        )
}