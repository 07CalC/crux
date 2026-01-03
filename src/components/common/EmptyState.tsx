import { FaSearch, FaInbox, FaExclamationTriangle } from "react-icons/fa";
import { IoSadOutline } from "react-icons/io5";

interface EmptyStateProps {
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  icon?: "search" | "inbox" | "sad" | "warning";
}

export const EmptyState = ({ title, description, action, icon = "search" }: EmptyStateProps) => {
  const icons = {
    search: <FaSearch className="text-6xl md:text-8xl text-gray-400 dark:text-gray-600" />,
    inbox: <FaInbox className="text-6xl md:text-8xl text-gray-400 dark:text-gray-600" />,
    sad: <IoSadOutline className="text-6xl md:text-8xl text-gray-400 dark:text-gray-600" />,
    warning: <FaExclamationTriangle className="text-6xl md:text-8xl text-yellow-500 dark:text-yellow-600" />
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4" role="status" aria-live="polite">
      <div className="mb-6" aria-hidden="true">
        {icons[icon]}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 text-center">
        {title}
      </h3>
      <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 text-center max-w-md mb-6">
        {description}
      </p>
      {action && (
        <button
          onClick={action.onClick}
          className="group rounded-xl text-base md:text-lg inline-flex items-center justify-center gap-2 text-black border-2 border-black dark:border-white dark:text-white transition-all ease-in-out duration-200 shadow-[6px_6px_0px_0px] hover:shadow-[8px_8px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-2 active:translate-y-2 dark:shadow-white shadow-black bg-purple-300 dark:bg-purple-700 px-6 py-3 font-semibold"
          aria-label={action.label}
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export const NoResultsState = ({ searchQuery, onReset }: { searchQuery?: string; onReset?: () => void }) => {
  return (
    <EmptyState
      icon="search"
      title="No Results Found"
      description={
        searchQuery
          ? `We couldn't find any colleges matching "${searchQuery}". Try different keywords or filters.`
          : "No colleges match your current filters. Try adjusting your search criteria."
      }
      action={
        onReset
          ? {
              label: "Clear Filters",
              onClick: onReset,
            }
          : undefined
      }
    />
  );
};

export const ErrorState = ({ message, onRetry }: { message?: string; onRetry?: () => void }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24 px-4" role="alert" aria-live="assertive">
      <div className="bg-red-100 dark:bg-red-950/30 border-2 border-red-500 dark:border-red-700 rounded-xl p-6 md:p-8 max-w-md text-center shadow-[4px_4px_0px_0px] shadow-red-500 dark:shadow-red-700">
        <FaExclamationTriangle className="text-5xl md:text-6xl text-red-600 dark:text-red-500 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-xl md:text-2xl font-bold text-red-900 dark:text-red-100 mb-3">
          Oops! Something Went Wrong
        </h3>
        <p className="text-sm md:text-base text-red-800 dark:text-red-200 mb-6">
          {message || "We encountered an error while loading data. Please try again."}
        </p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="rounded-xl text-base inline-flex items-center justify-center text-white border-2 border-red-700 dark:border-red-500 transition-all ease-in-out duration-200 shadow-[4px_4px_0px_0px] hover:shadow-[6px_6px_0px_0px] active:shadow-[0px_0px_0px_0px] active:translate-x-1 active:translate-y-1 shadow-red-700 dark:shadow-red-500 bg-red-600 dark:bg-red-700 px-6 py-3 font-semibold"
            aria-label="Retry loading"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};
