"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface CollegeTabsProps {
  tabs: Tab[];
  children: React.ReactNode[];
}

export const CollegeTabs = ({ tabs, children }: CollegeTabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      <div className="sticky h-20 top-0 z-40 bg-background/95 backdrop-blur-sm border-b-3 border-border shadow-sm">
        <div className="container-custom h-full">
          <div className="flex overflow-x-auto h-full hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 text-sm font-semibold whitespace-nowrap
                  transition-all duration-200 border-b-2 hover:bg-primary/5
                  ${activeTab === tab.id
                    ? "border-primary text-primary bg-primary/10"
                    : "border-transparent text-muted-foreground"
                  }
                `}
              >
                {tab.icon && <span className="text-base">{tab.icon}</span>}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container-custom py-8">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? "block" : "hidden"}
          >
            {children[index]}
          </div>
        ))}
      </div>
    </div>
  );
};
