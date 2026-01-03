import Image from "next/image";

interface LoadingStateProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export const LoadingState = ({ message = "Loading...", size = "md" }: LoadingStateProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20" role="status" aria-live="polite">
      <div className="relative mb-6">
        <Image
          src="/loadingCat2.gif"
          alt=""
          width={128}
          height={128}
          className={`${sizeClasses[size]} object-contain animate-bounce`}
          unoptimized
          aria-hidden="true"
        />
      </div>
      <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
        {message}
      </p>
      <span className="sr-only">Loading content</span>
    </div>
  );
};

export const TableLoadingState = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="space-y-4 animate-pulse">
        {/* Header skeleton */}
        <div className="flex gap-4">
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded flex-1"></div>
        </div>
        {/* Row skeletons */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded flex-1"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded flex-1"></div>
            <div className="h-12 bg-gray-200 dark:bg-gray-800 rounded flex-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CardLoadingState = ({ count = 3 }: { count?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className="bg-white dark:bg-[#1a1a1a] border-2 border-black dark:border-white rounded-xl p-6 shadow-[4px_4px_0px_0px] shadow-black dark:shadow-white animate-pulse"
        >
          <div className="h-48 bg-gray-300 dark:bg-gray-700 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        </div>
      ))}
    </div>
  );
};
