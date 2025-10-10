import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

type props = {
  currPage: number;
  totalPages: number;
  setCurrPage: React.Dispatch<React.SetStateAction<number>>;
  colsShown: number;
  setColsShown: React.Dispatch<React.SetStateAction<number>>;
};

export const PaginationNav = ({
  currPage,
  setCurrPage,
  totalPages,
  setColsShown,
}: props) => {
  return (
    <div className="sm:flex grid justify-end items-center gap-4 sm:px-5">
      <div className="flex items-center justify-center gap-x-2">
          <p className="text-black flex whitespace-nowrap text-lg dark:text-white">Rows per page</p>
        <select
          className="sm:p-3 p-2  border-2 text-lg font-semibold shadow-[4px_4px_0px_0px] border-black dark:border-gray-100 rounded-lg bg-purple-500  text-black dark:text-gray-100"
          onChange={(e) => setColsShown(parseInt(e.target.value))}
        >
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <div className="w-full flex gap-x-2 sm:gap-x-4">
      <button
        onClick={() => setCurrPage(1)}
        disabled = {currPage === 1}
        className="rounded-xl sm:text-lg disabled:cursor-not-allowed self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white disabled:shadow-none disabled:active:transform-none shadow-black bg-purple-500 p-2"
      >
        <MdKeyboardDoubleArrowLeft />
      </button>
      <button
        disabled = {currPage === 1}
       onClick={() => setCurrPage(prev => prev-1)} className="rounded-xl disabled:cursor-not-allowed sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white disabled:shadow-none disabled:active:transform-none shadow-black bg-purple-500 p-2">
        <MdArrowBackIos />
      </button>
      <p className="text-black text-xl bg-purple-500 p-1 px-2 rounded-lg sm:px-3 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px] sm:shadow-[6px_6px_0px_0px] shadow-black dark:shadow-white dark:text-white">{currPage} of {totalPages}</p>
      <button
      disabled = {currPage === totalPages}
      onClick={() => setCurrPage(prev => prev+1)} className="rounded-xl disabled:cursor-not-allowed sm:text-lg self-start items-center justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 disabled:shadow-none disabled:active:transform-none dark:shadow-white  shadow-black bg-purple-500 p-2">
        <MdArrowForwardIos />
      </button>
      <button
        disabled = {currPage === totalPages}
        onClick={() => setCurrPage(totalPages)}
        className="rounded-xl sm:text-lg self-start items-center disabled:cursor-not-allowed justify-center flex text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 sm:shadow-[6px_6px_0px_0px] shadow-[4px_4px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 sm:active:translate-x-2 sm:active:translate-y-2 active:duration-100 dark:shadow-white disabled:shadow-none disabled:active:transform-none shadow-black bg-purple-500 p-2"
      >
        <MdKeyboardDoubleArrowRight />
      </button>
      </div>
    </div>
  );
};
