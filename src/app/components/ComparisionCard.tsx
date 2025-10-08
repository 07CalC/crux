export const ComparisionCard = ({ college, handleSelect, branch }: { college: { id: string; name: string; branches: string[]; nirf: string; coverImage?: string; location: string; }, handleSelect: (selectedCollegeId: string) => void; branch: string }) => {
  const { branch: branchName, duration } = parseBranchInfo(branch);
  return (
    <button
      onClick={() => handleSelect(college.id)}
      className="h-auto my-auto flex flex-col bg-white dark:bg-[#1a1a1a] border border-black   
        ease-in-out duration-200 
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
        dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]
        hover:-translate-y-1 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
        dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]
        active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1  
        rounded-2xl transition w-full text-left"
    >
      <div className="h-60 sm:h-72 md:h-80 lg:h-96">
        {college.coverImage ? (
          <img
            src={college.coverImage}
            alt={college.name}
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="w-full h-2/3 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 text-sm sm:text-base md:text-lg">No Image</span>
          </div>
        )}
      </div>
      <div className="w-full p-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white">{college.name}</h2>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-500">{branchName}</p>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-purple-500">{duration}</p>
        <p className="text-base sm:text-lg md:text-xl text-black dark:text-white font-bold">NIRF Rank: {college.nirf}</p>
        <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-300 mt-2">Location: {college.location}</p>
      </div>
    </button>
  )
}

function parseBranchInfo(input: string): { branch: string; duration: string | null } {
  const match = input.match(/^(.*?)\s*\(\s*(.*?)\s*\)$/);
  if (!match) return { branch: input.trim(), duration: null };
  return {
    branch: match[1].trim(),
    duration: match[2].trim()
  };
}
