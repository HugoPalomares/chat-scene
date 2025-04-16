
import React, { useState } from "react";
import { TitleBar } from "./TitleBar";
import { AppBar } from "./AppBar";
import { LeftRail } from "./LeftRail";
import { ChatHeader } from "./ChatHeader";
import { ChatContent } from "./ChatContent";
import { ChatCompose } from "./ChatCompose";
import { X } from "lucide-react";

export const Shell: React.FC = () => {
  const [rightSideVisible, setRightSideVisible] = useState(false);

  const toggleRightSide = () => {
    setRightSideVisible(prev => !prev);
  };

  return (
    <div className="bg-[rgba(234,234,234,1)] overflow-hidden h-full flex flex-col">
      <TitleBar />
      <div className="flex w-full items-stretch flex-1 h-[calc(100%-48px)] max-md:max-w-full">
        <AppBar />
        <LeftRail />
        <div className="min-w-60 flex-1 shrink basis-[0%] flex flex-col max-md:max-w-full">
          <ChatHeader onToggleRightSide={toggleRightSide} rightSideVisible={rightSideVisible} />
          <div className="bg-white w-full flex-1 flex flex-col max-md:max-w-full relative overflow-hidden border-t border-[rgba(0,0,0,0.05)]">
            <div className="flex flex-1 h-full">
              <div className="flex-1 flex flex-col overflow-hidden">
                <ChatContent />
                <div className="sticky bottom-0 left-0 right-0 z-10">
                  <ChatCompose />
                </div>
              </div>
              {rightSideVisible && (
                <div className="w-72 border-l border-[rgba(0,0,0,0.05)] flex flex-col">
                  <div className="p-4 border-b border-[rgba(0,0,0,0.05)] flex justify-between items-center">
                    <h2 className="text-[#242424] text-lg font-bold leading-none">Agent Details</h2>
                    <button 
                      onClick={toggleRightSide} 
                      className="text-gray-500 hover:text-gray-700"
                      aria-label="Close panel"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-4 flex-1 overflow-auto">
                    {/* Content will go here */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
