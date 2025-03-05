"use client";
// import Table from "../components/Table";
import { useState, useEffect } from "react";
import { Table } from "../components/Table";
import Filters from "../components/Filters";
import { RequiredFilters } from "../components/RequiredFilters";
import { ViewToggle } from "../components/ViewToggle";
import { PaginationNav } from "../components/PaginationNav";
import { advanced2023JossaRound1 } from "../../../ORCR/bruh"
import type { Orcr } from "@/types/globalTypes";
import { Loading } from "../components/Loading";

export default function Orcr() {
  const [orcrData, setOrcrData] = useState<Orcr[]>([]);
  const [fetchedOrcrData, setFetchedOrcrData] = useState<Orcr[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string>("");
  const [currPage, setCurrPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(5);
  const [colsShown, setColsShown] = useState<number>(10);
  const [filters, setFilters] = useState({
    instiSearch: "",
    institute: "",
    academicProgramName: "",
    quota: "",
    seatType: "",
    gender: "",
    rank: "",
  });
  const [requiredFilters, setRequiredFilters] = useState<{ [key: string]: string | number }>({
    exam: "ADVANCED",
    year: 2023,
    round: 1,
    type: "JOSSA"
  })
  const [view, setView] = useState<{ [key: string]: boolean }>({
    institute: true,
    academicProgramName: true,
    gender: true,
    quota: true,
    seatType: true,
    openRank: true,
    closeRank: true
  })


  const fetchOrcrData = async () => {
    setLoading(true);
    if(requiredFilters.exam == "ADVANCED" && requiredFilters.year == 2023 && requiredFilters.round == 1 && requiredFilters.type == "JOSSA"){
      setFetchedOrcrData(advanced2023JossaRound1)
      setTotalPages(Math.ceil(advanced2023JossaRound1.length / colsShown));
      setLoading(false)
      return;
    }
    try {
      const res = await fetch("/api/getOrcr", {
        method: "POST",
        body: JSON.stringify({ exam: requiredFilters.exam, year: requiredFilters.year, round: requiredFilters.round, type: requiredFilters.type }),
      });
      const data = await res.json();
      setFetchedOrcrData(data)
      setTotalPages(Math.ceil(data.length / colsShown));
    } catch (error) {
      // setError("An error occurred while fetching the data");
      console.log(error)
    }
    setLoading(false);
  };
  useEffect(() => {
    setTotalPages(Math.ceil(fetchedOrcrData.length / colsShown))
  }, [colsShown])
  useEffect(() => {
    fetchOrcrData();
    setTotalPages(Math.ceil(fetchedOrcrData.length / colsShown))
  }, [requiredFilters]);
  
  useEffect(() => {
    setOrcrData(fetchedOrcrData.slice((currPage - 1) * colsShown, currPage * colsShown))
  },[currPage, totalPages, colsShown])

  useEffect(() => {
    if(filters.instiSearch){
    setOrcrData(fetchedOrcrData.filter((orcr) => orcr.institute.toLowerCase().includes(filters.instiSearch.toLowerCase())).slice((currPage - 1) * colsShown, currPage * colsShown))
    }
    else setOrcrData(fetchedOrcrData.slice((currPage - 1) * colsShown, currPage * colsShown))
  }, [filters.instiSearch])
  
  console.log(filters.instiSearch)
  return (
    <div className="flex flex-col items-center w-full p-4 gap-y-4">
{/*       
      <button className="rounded-xl text-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 dark:shadow-white shadow-black bg-purple-500 p-4">
        Click me!
      </button> */}
      <RequiredFilters requiredFilters={requiredFilters} setRequiredFilters={setRequiredFilters}/>
      <div className="w-full max-w-screen sm:px-4 flex justify-between gap-x-3 sm:gap-x-8 items-center">
      <Filters onFilterChange={(filters: typeof requiredFilters) => console.log(filters)} />
      <input type="text" value={filters.instiSearch} onChange={(e) => setFilters({...filters, instiSearch: e.target.value})} placeholder="Search by Institute" className="p-2 bg-gray-300 border-2 dark:bg-[#222222] rounded-lg shadow-[4px_4px_0px_0px] shadow-black dark:shadow-white focus:shadow-[0px_0px_0px_0px] focus:translate-y-1 focus:translate-x-1 focus:duration-100 transition-all ease-in-out text-black dark:text-white border-black dark:border-gray-100 w-full" />
      <ViewToggle view={view} setView={setView} />
      </div>
      {loading && <Loading />}
      {!loading && <>
      <Table orcr={orcrData} />
      <div className="flex justify-center sm:justify-end items-center space-x-4 w-full ">
        <PaginationNav currPage={currPage} setCurrPage={setCurrPage} totalPages={totalPages} colsShown={colsShown} setColsShown={setColsShown} />
      </div>
      </>}
    </div>
  );
}
