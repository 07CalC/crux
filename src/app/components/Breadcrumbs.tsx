"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useEffect, useState } from "react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const [pathHistory, setPathHistory] = useState<Array<{ path: string; label: string }>>([]);
  const formatLabel = (segment: string): string => {
    
    return segment
      .replace(/-|_/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  useEffect(() => {
    if (pathname === "/") return;
    
    const pathSegments = pathname.split("/").filter(segment => segment);
    
    const newPathHistory = pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      return {
        path,
        label: formatLabel(segment)
      };
    });
    
    newPathHistory.unshift({ path: "/", label: "Home" });
    
    setPathHistory(newPathHistory);
  }, [pathname]);

  if (pathname === "/") return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full px-4 md:px-12 py-2 ">
      <ol className="flex flex-wrap items-center gap-1 text-sm md:text-base">
        {pathHistory.map((item, index) => (
          <li key={item.path} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 mx-1 text-gray-500 dark:text-gray-400" />
            )}
            
            {index === 0 && (
              <Home className="h-4 w-4 mr-1 text-purple-600 dark:text-purple-400" />
            )}
            
            {index === pathHistory.length - 1 ? (
              <span className="font-semibold text-black dark:text-white">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.path}
                className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}