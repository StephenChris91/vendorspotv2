"use client";

import { TabProps } from "@/app/types/types";
import React, { useState } from "react";

interface TabsProps {
  tabs: TabProps[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-2">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-4 border border-gray-200 mt-2">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
