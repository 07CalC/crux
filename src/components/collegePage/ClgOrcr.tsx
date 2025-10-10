"use client";
import { Orcr } from "@/types/globalTypes";
import { useState, useMemo, useEffect } from "react";
import { Table } from "@/components/common/Table";

import { availableBitsatYears, availableCsabYears, availableJossaYears, bitsatRoundByYearsGlobal, csabRoundByYearsGlobal, jossaRoundByYearsGlobal, mostRecentBitsatOrcr, mostRecentJossaOrcr } from "@/constants";
import { NotFound } from "../common/NotFound";
import { Loading } from "../common/Loading";
import { PaginationNav } from "../common/PaginationNav";
import { ViewToggle } from "../common/ViewToggle";

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
  };


  const [requiredFilters, setRequiredFilters] = useState<{
    [key: string]: string | number;
  }>({
    type: counsellingType[clgType!][0],
    year: clgType === "BITS" ? availableBitsatYears[availableBitsatYears.length - 1] : availableJossaYears[availableJossaYears.length - 1],
    round: clgType === "BITS" ? mostRecentBitsatOrcr.round : mostRecentJossaOrcr.round,
  });

  const availableYears: Record<string, number[]> = clgType === "BITS" ? { BITSAT: availableBitsatYears } : {
    JOSSA: availableJossaYears,
    CSAB: availableCsabYears,
  }
  const availableRounds: Record<string, Record<number, number[]>> = clgType === "BITS" ? { BITSAT: bitsatRoundByYearsGlobal } : {
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
    } else {
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

      return matchesProgram && matchesSeatType && matchesGender && matchesRank;
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
    return <NotFound text="No data found" />;

  return (
    <div className="w-full mt-10 h-full flex flex-col items-center justify-center border-2 border-purple-500 bg-purple-400/40 dark:bg-purple-900/40 rounded-lg shadow-lg p-4">
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
                  className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100"
                >
                  {(option[key as keyof typeof option] as (string | number)[]).map((value, index) => (
                    <option
                      key={index}
                      value={value}
                      className="bg-white dark:bg-[#1a1a1a]"
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
              className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100"
            >
              <option value="">All</option>
              {filterOptions[0].academicProgramName.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  className="bg-white dark:bg-[#1a1a1a]"
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
              className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100"
            >
              <option value="">All</option>
              {filterOptions[1].seatType.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  className="bg-white dark:bg-[#1a1a1a]"
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
              className="p-3 active:ring-0 ring-0 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100"
            >
              <option value="">All</option>
              {filterOptions[2].gender.map((value, index) => (
                <option
                  key={index}
                  value={value}
                  className="bg-white dark:bg-[#1a1a1a]"
                >
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-lg font-semibold text-black dark:text-gray-100">
              {clgType === "BITS" ? "Marks" : "Rank"}
            </label>
            <input
              type="number"
              name="rank"
              value={filters.rank || ""}
              onChange={(e) =>
                setFilters({ ...filters, rank: parseInt(e.target.value) || 0 })
              }
              placeholder="Enter your rank"
              className="p-2 w-full border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-white dark:bg-[#1a1a1a] text-black dark:text-gray-100"
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
          <Table orcr={paginatedData} view={view} sort={sort} setSort={setSort} />
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
