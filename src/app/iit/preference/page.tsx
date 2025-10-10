"use client";
import { ComparisionCard } from "@/components/ComparisionCard";
import { Loading } from "@/components/common/Loading";
import Link from "next/link";
import { useEffect, useState } from "react";
type College = {
  id: string;
  name: string;
  branches: string[];
  nirf: string;
  coverImage?: string;
  location: string;
};

type Comparison = {
  collegeA: College;
  branchA: string;
  collegeB: College;
  branchB: string;
};

export default function ComparePage() {
  const TOTAL_COMPARISONS = 20;

  const [comparisons, setComparisons] = useState<Comparison[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    async function init() {
      const res = await fetch("/api/v1/compare/init");
      const data = await res.json();
      setComparisons(data.comparisons);
      setSessionId(data.sessionId);
    }
    init();
  }, []);

  if (!comparisons.length) return <Loading />;
  if (currentIndex >= TOTAL_COMPARISONS) {
    return (
      <main className="min-h-screen h-full w-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl text-purple-500 mb-8 font-semibold">
          Thank you for completing the comparisons!
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300">
          You can now close this window.
        </p>
        <button onClick={() => window.location.reload()} className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">
          Restart Comparisons
        </button>
        <Link href="/" className="mt-6 text-purple-500 underline">
          Go to Home
        </Link>
      </main>
    )
  }

  const current = comparisons[currentIndex];

  const handleSelect = async (selectedCollegeId: string) => {
    setCurrentIndex((prev) => prev + 1);

    await fetch("/api/v1/compare/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        collegeAId: current.collegeA.id,
        branchA: current.branchA,
        collegeBId: current.collegeB.id,
        branchB: current.branchB,
        selectedCollegeId,
      }),
    });


  };

  return (
    <main className="min-h-screen h-full w-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl text-purple-500 mb-8 font-semibold">
        Choose your preferred option ({currentIndex + 1}/{TOTAL_COMPARISONS})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full flex-1">
        <ComparisionCard
          college={current.collegeA}
          branch={current.branchA}
          handleSelect={handleSelect}
        />
        <ComparisionCard
          college={current.collegeB}
          branch={current.branchB}
          handleSelect={handleSelect}
        />
      </div>
    </main>
  );
}
