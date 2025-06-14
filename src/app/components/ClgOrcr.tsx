"use client";

import { Orcr } from "@/types/globalTypes";
import { useState, useMemo, useEffect } from "react";
import { Table } from "./Table";
import { PaginationNav } from "./PaginationNav";
import { NotFound } from "./NotFound";
import { ViewToggle } from "./ViewToggle";
import { Loading } from "./Loading";

export const ClgOrcr = ({
  clgId,
  clgType,
}: {
  clgId: string;
  clgType?: "IIT" | "GFTI" | "BITS" | "JAC";
}) => {
  const [fetchedOrcr, setFetchedOrcr] = useState<Orcr[]>([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [colsShown, setColsShown] = useState(10);
  const [filters, setFilters] = useState({
    academicProgramName: "",
    seatType: "",
    gender: "",
    rank: 0,
  });

  const counsellingType = {
    IIT: ["JOSSA"],
    GFTI: ["JOSSA", "CSAB"],
    BITS: ["BITSAT"],
    JAC: ["JAC"],
  };

  console.log("clgType", clgType);

  const [requiredFilters, setRequiredFilters] = useState<{
    [key: string]: string | number;
  }>({
    type: counsellingType[clgType!][0],
    year: 2024,
    round: 1,
  });

  const requiredFiltersOptions = useMemo(() => {
    if (clgType === "IIT") {
      return [
        { type: ["JOSSA"] },
        { year: [2023, 2024, 2025] },
        { round: requiredFilters.year === 2025 ? [1] : requiredFilters.year === 2024 ? [1, 2, 3, 4, 5] : [1, 2, 3, 4, 5, 6]},
      ];
    } else if (clgType === "GFTI") {
      return [
        { type: ["JOSSA", "CSAB"] },
        { year: [2023, 2024, 2025] },
        { round: requiredFilters.type === "JOSSA" ? [1, 2, 3, 4, 5] : [1, 2] },
      ];
    } else if (clgType === "BITS") {
      return [
        { type: ["BITSAT"] },
        { year: [2023, 2024] },
        { iteration: [1, 2, 3, 4, 5] },
      ];
    } else {
      return [{ type: ["JAC"] }, { year: [2023, 2024] }, { round: [1, 2, 3] }];
    }
  }, [clgType, requiredFilters.type]);

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
  >([
    { name: "Year", key: "year", show: false },
    { name: "Round", key: "round", show: false },
    { name: "Type", key: "type", show: false },
    { name: "Institute", key: "institute", show: false },
    { name: "Academic Program", key: "academicProgramName", show: true },
    { name: "Gender", key: "gender", show: true },
    { name: "Quota", key: "quota", show: true },
    { name: "Seat Type", key: "seatType", show: true },
    { name: "Open Rank", key: "openRank", show: true },
    { name: "Close Rank", key: "closeRank", show: true },
  ]);

  const filteredData = useMemo(() => {
    return fetchedOrcr.filter(
      (orcr) =>
        orcr.academicProgramName
          .toLowerCase()
          .includes(filters.academicProgramName.toLowerCase()) &&
        (filters.seatType === "" || orcr.seatType === filters.seatType) &&
        orcr.gender.toLowerCase().includes(filters.gender.toLowerCase()) &&
        orcr.closeRank >= filters.rank
    );
  }, [fetchedOrcr, filters]);

  const totalPages = Math.ceil(filteredData.length / colsShown);

  const paginatedData: Orcr[] = useMemo(() => {
    return filteredData.slice((currPage - 1) * colsShown, currPage * colsShown);
  }, [filteredData, currPage, colsShown]);

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
      academicProgramName: "",
      seatType: "",
      gender: "",
      rank: 0,
    });
  };

  useEffect(() => {
    fetchOrcr();
  }, [requiredFilters]);

  const handleRequiredFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'type' && value === 'CSAB') {
      if (Number(requiredFilters.round) > 2) {
        setRequiredFilters({
          ...requiredFilters,
          [name]: value,
          round: 2 
        });
        return;
      }
    }
    
    setRequiredFilters({
      ...requiredFilters,
      [name]: value
    });
  };

  if (!loading && fetchedOrcr.length === 0)
    return <NotFound text="No data found" />;

  return (
    <div className="w-full mt-10 h-full flex flex-col items-center justify-center border-2 border-purple-500 bg-purple-200 dark:bg-purple-900/40 rounded-lg shadow-lg p-4">
      <div className="w-full mb-6">
        <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {requiredFiltersOptions.map((option, index) => {
            const key = Object.keys(option)[0];
            return (
              <div key={index}>
                <label className="text-lg font-semibold text-black dark:text-gray-100">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <select
                  name={key}
                  value={requiredFilters[key]}
                  onChange={handleRequiredFilterChange}
                  className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-gray-300 dark:bg-[#222222] text-black dark:text-gray-100"
                >
                  {(option[key as keyof typeof option] as (string | number)[]).map((value, index) => (
                    <option
                      key={index}
                      value={value}
                      className="bg-gray-300 dark:bg-[#282828]"
                    >
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>
        <div className="p-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          <div>
            <label className="text-lg font-semibold text-black dark:text-gray-100">
              Program
            </label>
            <select
              name="academicProgramName"
              value={filters.academicProgramName}
              onChange={(e) =>
                setFilters({ ...filters, academicProgramName: e.target.value })
              }
              className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-gray-300 dark:bg-[#222222] text-black dark:text-gray-100"
            >
              <option value="">All</option>
              {filterOptions[0].academicProgramName.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  className="bg-gray-300 dark:bg-[#282828]"
                >
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-lg font-semibold text-black dark:text-gray-100">
              Seat Type
            </label>
            <select
              name="seatType"
              value={filters.seatType}
              onChange={(e) =>
                setFilters({ ...filters, seatType: e.target.value })
              }
              className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-gray-300 dark:bg-[#222222] text-black dark:text-gray-100"
            >
              <option value="">All</option>
              {filterOptions[1].seatType.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  className="bg-gray-300 dark:bg-[#282828]"
                >
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-lg font-semibold text-black dark:text-gray-100">
              Gender
            </label>
            <select
              name="gender"
              value={filters.gender}
              onChange={(e) =>
                setFilters({ ...filters, gender: e.target.value })
              }
              className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-gray-300 dark:bg-[#222222] text-black dark:text-gray-100"
            >
              <option value="">All</option>
              {filterOptions[2].gender.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  className="bg-gray-300 dark:bg-[#282828]"
                >
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-lg font-semibold text-black dark:text-gray-100">
              Rank
            </label>
            <input
              type="number"
              name="rank"
              value={filters.rank || ""}
              onChange={(e) =>
                setFilters({ ...filters, rank: parseInt(e.target.value) || 0 })
              }
              placeholder="Enter your rank"
              className="p-2 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-gray-300 dark:bg-[#222222] text-black dark:text-gray-100"
            />
          </div>
        </div>
        <div className=" flex flex-row w-full gap-x-5 justify-end items-center">
          <div>
            <button
              onClick={() => {
                setFilters({
                  academicProgramName: "",
                  seatType: "",
                  gender: "",
                  rank: 0,
                });
              }}
              className="rounded-xl text-black dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 active:duration-100 border-2 border-black dark:border-white shadow-black dark:shadow-white bg-purple-500 p-2"
            >
              Clear Filters
            </button>
          </div>
          <div>
            <ViewToggle view={view} setView={setView} />
          </div>
        </div>
      </div>

      {loading && <Loading />}
      {!loading && paginatedData.length > 0 && (
        <>
        <Table orcr={paginatedData} view={view} />
        <div className="flex mt-5 justify-center sm:justify-end items-center space-x-4 w-full ">
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
      
      {loading && (
        <p className="text-center text-black dark:text-white">Loading...</p>
      )}
      {!loading && paginatedData.length === 0 && (
        <NotFound text="No data found" />
      )}
    </div>
  );
};
